from flask import Flask, request,jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import datetime
import xml.etree.ElementTree as ET
from sklearn.pipeline import Pipeline
import xgboost as xgb
import joblib
from scipy.sparse import hstack
from sklearn.base import TransformerMixin
from scipy.sparse import csr_matrix
import category_encoders  as ce
from sklearn.preprocessing import OneHotEncoder

app = Flask(__name__)
CORS(app)

#DefaultValues
defaultValuesDict = {
    "Tsi(Turbo Supercharger Injection)": 1.5,
    "Sübap": 15,
    "Tuketim": 5.5,
    "Silindi": 4,
    "MaxTork": 243,
    "Hiz": 196,
    "Garanti": "Garantisiz",
    "Güvenlik Group": 8,
    "Konfor Group": 14
}

# #To do Metalik Renk kategorisinde var mı die kontorl edecek
# def ControlMetalic(evetHayır):
#     if
#         return True
#     else
#         return False 

@app.route('/')
def home():
    print("Home")
    return 'Welcome to the homepage'


@app.route('/api/endpoint', methods=['POST'])
def handle_data():
    data = request.get_json()
    tree = ET.ElementTree(ET.fromstring('<root>' + data + '</root>')) # this is xml
            
    
    resultDF = process_dataToDataFrame(tree)
    
    data_pipeline = Pipeline([('sparse', SparseMatrix())])

    bst = xgb.Booster()
    bst.load_model('finalCalcurCar.model')
    print("After")
    resultDF_transformed = data_pipeline.fit_transform(resultDF)
    print("After2")
    print("resultDF_transformed\n "+str(resultDF_transformed))
    xgmat = xgb.DMatrix(resultDF_transformed,missing = -999.0)
    print("After3")
    print("xgmat \n"+str(xgmat))
    ypred = bst.predict(xgmat)
    ypred_str = np.array2string(ypred) 
    print("ypred_str -> "+ypred_str)

    return ypred_str


def process_dataToDataFrame(xmlTree):
    
    #will convert it to DataFrame,Need to assign optimal values if they're not given
    dictTakenProperties_Values ={}
    brandName =""
    MarkaName =""
    for car_properties in xmlTree.findall('carProperties'):
        for child in car_properties:
            print(child.tag, child.text)
            # if str(child.tag) =="brand":  
            #     #brandName = child.text

            #To-do FOr Metalic

            if str(child.tag) =="Marka":
                MarkaName = child.text
            dictTakenProperties_Values[str(child.tag)] = child.text
    
    brandName = "CLA-Serisi"
    # dataFrameTOReturn = pd.DataFrame(data)
    single_row = pd.read_csv('single_row.csv')

    dataFrameTOReturn = single_row.copy()

    dataFrameTOReturn =dataFrameTOReturn.drop("Unnamed: 0",axis=1)
    
    dataFrameTOReturn.loc[0,"Marka_Model"]= MarkaName +" "+brandName
    print("MarkaName "+ MarkaName+" brandName "+brandName)
    print("dataFrameTOReturn[Marka_Model] "+ dataFrameTOReturn["Marka_Model"][0])

    dataFrameTOReturn = fillwithDefaultValues(dataFrameTOReturn,dictTakenProperties_Values)

    dataFrameTOReturn.to_csv("dataFrameTOReturn.csv")





    return dataFrameTOReturn

"""
Renk_Metalik Beyaz
Renk_Metalik Gri
Renk_Metalik Kırmızı
Renk_Metalik Mavi
Renk_Metalik Siyah
Renk_Metalik Yeşil

"""


def fillwithDefaultValues(dataFrame,dictTakenProperties_Values):
    print("startOf fillwithDefaultValues")
    for i in dataFrame.columns:
        print("i is -> "+i)
        if i in dictTakenProperties_Values.keys() and i !="Marka_Model":
            print("in If")
            dataFrame[i] = dictTakenProperties_Values[i] #bura bi tek MarkaModel bi istisna olucak yani ondaki string i birleştirecem
        elif i in defaultValuesDict.keys() and i !="Marka_Model":
            print("in ELIf")
            dataFrame[i] = defaultValuesDict[i]
    

    return dataFrame
    






class SparseMatrix(TransformerMixin): # Pipeline
    def __init__(self):
        None
    def fit(self, X, y=None):
        return self
    def transform(self, X, y=None):
        #print("parameter X->\n" ,X)
        #print("\n type(parameter X)",type(X))
        getJoblib = joblib.load('ClassForAllObject.joblib')
        #print("\n type(getJoblib)-> \n ",getJoblib)

        
        res = getJoblib.transformFullyEncodedCsrMatrix(X)
        #print("res -->" , res)
        return res

class ClassForAll: #yeni dataFframe oluştursun olana eklesin  
    _OHE_categorical_columns = ['Renk','Kasa_Tipi','Konum']
    _SpecialFor_Categorical=['Aktarma','Garanti','Yakit']
    _BE_categorical_columns = ['Marka_Model']
    _LabelEncoding =['Sanziman','Model_Yili']#Made them manuel
    Yakit_dictB={
    "Dizel":2,
    "Benzin":3,
    "LPG":1
    }
    Garanti_dictB={
    "Garantisiz":0,
    "1 YIldan Uzun":2,
    "1 Yıla Kadar":1
    }
    Aktarma_dictB={
    "Önden Çekiş":0,
    "4x4":2,
    "Arkadan İtiş":1
    }
    
    Sanziman_dictB={
    "Manuel":0,
    "Otomatik":1
    }        
    def transformFullyEncodedCsrMatrix(self,df): #then this
        df[self._SpecialFor_Categorical[0]] =df[self._SpecialFor_Categorical[0]].map(self.Aktarma_dictB)
        print("We re here 1")
        df[self._SpecialFor_Categorical[1]] =df[self._SpecialFor_Categorical[1]].map(self.Garanti_dictB)
        print("We re here 2")
        df[self._SpecialFor_Categorical[2]] =df[self._SpecialFor_Categorical[2]].map(self.Yakit_dictB)
        print("We re here 3")
        #Stayed same place(column order)
                
        df[self._LabelEncoding[0]]=df[self._LabelEncoding[0]].map(self.Sanziman_dictB)
        print("We re here 4")
        if(int(df[self._LabelEncoding[1]])>=2000):#No need for joblib if Model_Yili is greater than 2000 i will remove from today's year
            #print("Hatayı burda mı alıyoz")
            df[self._LabelEncoding[1]] = str(datetime.datetime.now().year-int(df[self._LabelEncoding[1]]))
        #Stayed same place(column order)
        print("We re here 5")

        ohe = joblib.load('./OHEPART.joblib')#One Hot Encoder
        print("We re here 6")

        binry_encoding = joblib.load('./hot2BinaryEncoder.joblib')
        print("We re here 7")
        
        df[self._OHE_categorical_columns] = df[self._OHE_categorical_columns].astype(str)
        print("We re here 8")

        hot = ohe.transform(df[self._OHE_categorical_columns])
        print("We re here 9")

        #gone to last (column order)
        hot2 = binry_encoding.transform(df[self._BE_categorical_columns])
        print("We re here 10")

        #print("\n Before hot2",hot2)
        #gone to last (column order)
        
        #print("\n len(hot2) ->",len(hot2))
        cold_df = df.select_dtypes(exclude=["object"])#NUmeric Columns
        print("We re here 11")

        
        #print("\n cold_df ->",cold_df)

        cold = csr_matrix(cold_df.values) 
        print("We re here 12")
        
        #print("\n hot ->",hot)
        #print("\n cold ->",cold)


            
        final_sparse_matrix = hstack((hot2,cold,hot)) 
        print("We re here 13")

        #print("\n final_sparse_matrix ->",final_sparse_matrix)
        final_csr_matrix = final_sparse_matrix.tocsr()
        print("We re here 14")
        
        #print("\n final_sparse_matrix after ->",final_sparse_matrix)
        #print("final_csr_matrix.shape",final_csr_matrix.shape)
        #print("At Last df.columns -->",df.columns)

        return final_csr_matrix

if __name__ == '__main__':
    app.run()
