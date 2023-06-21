from flask import Flask, request, jsonify
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
import category_encoders as ce
from sklearn.preprocessing import OneHotEncoder

app = Flask(__name__)
CORS(app)

# DefaultValues
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

ColorValues_TupleForMetalic = (
    "Beyaz",
    "Gri",
    "Kırmızı",
    "Mavi",
    "Siyah",
    "Yeşil"
)

# i'm going to put a algorithm for this then,we will multiply the result with it
modeyiliCoefficient = 0


@app.route('/')
def home():
    print("Home")
    return 'Welcome to the homepage'


@app.route('/api/endpoint', methods=['POST'])
def handle_data():
    data = request.get_json()
    tree = ET.ElementTree(ET.fromstring(
        '<root>' + data + '</root>'))  # this is xml

    resultDF = process_dataToDataFrame(tree)

    data_pipeline = Pipeline([('sparse', SparseMatrix())])

    bst = xgb.Booster()
    bst.load_model('finalCalcurCar.model')
    resultDF_transformed = data_pipeline.fit_transform(resultDF)
    print("resultDF_transformed\n "+str(resultDF_transformed))
    xgmat = xgb.DMatrix(resultDF_transformed, missing=-999.0)
    print("xgmat \n"+str(xgmat))
    ypred = bst.predict(xgmat)
    print("multiply  "+str((adjustmentForYear(resultDF) *adjustmentForInfulation())))
    ypred = ypred *(adjustmentForYear(resultDF) *adjustmentForInfulation())
    ypred_str = np.array2string(ypred)

    response = jsonify({'result': ypred_str})
    print("response " + str(response.data))

    return jsonify({'result': ypred_str})

def adjustmentForYear(df):
    Year =int(df["Model_Yili"][0])
    print(Year)
    if (int(Year)>= 2000):
        ageofCar = datetime.datetime.now().year - Year
    ageofCar =  Year
    if ageofCar == 1:
        return 2
    elif ageofCar ==20:
        return 1
    else:
        ratio = 2 -(ageofCar -1) * 0.09
        return ratio

def adjustmentForInfulation():
    # https://enagrup.org/bulten/0523.pdf //It's June. i took others just like this
    # Ocak 4,72%
    # Şubat 5,66%
    # Mart -1,49%
    # Nisan 7,53%
    # Mayıs 4,81%
    return 1.2123


def process_dataToDataFrame(xmlTree):

    # will convert it to DataFrame,Need to assign optimal values if they're not given
    dictTakenProperties_Values = {}
    ModelName = ""
    MarkaName = ""
    IsitMetalic = False
    for car_properties in xmlTree.findall('carProperties'):
        for child in car_properties:
            print(child.tag, child.text)
            if str(child.tag) == "models":
                ModelName = child.text
            if(str(child.tag) == "MaksTork"):
                child.tag = "MaxTork"
            if str(child.tag) == "Marka":
                MarkaName = child.text
            dictTakenProperties_Values[str(child.tag)] = child.text

    single_row = pd.read_csv('single_row.csv')

    dataFrameTOReturn = single_row.copy()

    dataFrameTOReturn = dataFrameTOReturn.drop(
        "Unnamed: 0", axis=1)  # bunu da kaldırıyoz elbette

    dataFrameTOReturn.loc[0, "Marka_Model"] = MarkaName + " "+ModelName


    dataFrameTOReturn = fillwithDefaultValues(
        dataFrameTOReturn, dictTakenProperties_Values)

    if IsitMetalic:
        dataFrameTOReturn.loc[0, "Renk"] = "Metalik" + \
            " "+dataFrameTOReturn.loc[0, "Renk"]

    dataFrameTOReturn.to_csv("dataFrameTOReturn.csv")

    return dataFrameTOReturn


def fillwithDefaultValues(dataFrame, dictTakenProperties_Values):
    for i in dataFrame.columns:
        if i in dictTakenProperties_Values.keys() and i != "Marka_Model":
            dataFrame[i] = dictTakenProperties_Values[i]
        elif i in defaultValuesDict.keys() and i != "Marka_Model":
            dataFrame[i] = defaultValuesDict[i]

    return dataFrame


class SparseMatrix(TransformerMixin):  # Pipeline
    def __init__(self):
        None

    def fit(self, X, y=None):
        return self

    def transform(self, X, y=None):
        getJoblib = joblib.load('ClassForAllObject.joblib')

        res = getJoblib.transformFullyEncodedCsrMatrix(X)
        return res


class ClassForAll:  # yeni dataFframe oluştursun olana eklesin

    # 2 problem var .Yıl ve Model durumu etki etmiyor
    _OHE_categorical_columnsPart1 = ['Renk', 'Kasa_Tipi']
    _OHE_categorical_columnsPart2 = ['Konum']
    _SpecialFor_Categorical = ['Aktarma', 'Garanti', 'Yakit']
    _BE_categorical_columns = ['Marka_Model']
    _LabelEncoding = ['Sanziman', 'Model_Yili']  # Made them manuel
    Yakit_dictB = {
        "Dizel": 2,
        "Benzin": 3,
        "LPG": 1
    }
    Garanti_dictB = {
        "Garantisiz": 0,
        "1 YIldan Uzun": 2,
        "1 Yıla Kadar": 1
    }
    Aktarma_dictB = {
        "Önden Çekiş": 0,
        "4x4": 2,
        "Arkadan İtiş": 1
    }

    Sanziman_dictB = {
        "Manuel": 0,
        "Otomatik": 1
    }

    def arrangefromDictionary(self, dataframe, dictforMOdelAndTherBinary, name):
        for i in range(0, 8):
            m = str(i)
            dataframename = "Marka_Model"+"_"+str(i)
            dataframe[dataframename] = int(dictforMOdelAndTherBinary[name][i])
        for i in range(7, -1, -1):
            m = str(i)
            columname = "Marka_Model"+"_"+m
            move_column = dataframe.pop(columname)
            dataframe.insert(0, columname, move_column)
        return dataframe


    # then this ,burda da bu joblib ile aldğım yer yerine bunu d,hot 2 min verileri yerine kendi verilerini koyucam dict den alınan o sayede burası da düzelmiş olacak
    def transformFullyEncodedCsrMatrix(self, df):
        df[self._SpecialFor_Categorical[0]] = df[self._SpecialFor_Categorical[0]].map(self.Aktarma_dictB)
        df[self._SpecialFor_Categorical[1]] = df[self._SpecialFor_Categorical[1]].map(self.Garanti_dictB)
        df[self._SpecialFor_Categorical[2]] = df[self._SpecialFor_Categorical[2]].map(self.Yakit_dictB)
        # Stayed same place(column order)

        df[self._LabelEncoding[0]] = df[self._LabelEncoding[0]].map(
            self.Sanziman_dictB)
        # No need for joblib if Model_Yili is greater than 2000 i will remove from today's year
        if (int(df[self._LabelEncoding[1]]) >= 2000):
            df[self._LabelEncoding[1]] = df[self._LabelEncoding[1]].astype(int)
            df[self._LabelEncoding[1]] = datetime.datetime.now().year - \
                df[self._LabelEncoding[1]]
        # Stayed same place(column order)
        df["Hiz"] = df["Hiz"].astype(int)


        ohe = joblib.load('./OHEPART.joblib')  # One Hot Encoder
        ohepart2 = joblib.load('./OHEPART2.joblib')  # One Hot Encoder Part2

        binry_encoding = joblib.load('./hot2BinaryEncoder.joblib')

        dictforMOdelAndTherBinary = joblib.load(
            './dictforMOdelAndTherBinary.joblib')
        name = df["Marka_Model"][0].strip()

        df[self._OHE_categorical_columnsPart1] = df[self._OHE_categorical_columnsPart1].astype(
            str)
        df[self._OHE_categorical_columnsPart2] = df[self._OHE_categorical_columnsPart2].astype(
            str)

        hot = ohe.transform(df[self._OHE_categorical_columnsPart1])
        hot_part2 = ohepart2.transform(df[self._OHE_categorical_columnsPart2])

        # gone to last (column order)
        hot2 = binry_encoding.transform(df[self._BE_categorical_columns])

        hot2 = self.arrangefromDictionary(
            hot2, dictforMOdelAndTherBinary, name)

        cold_df = df.select_dtypes(exclude=["object"])  # NUmeric Columns

        # Replace with the actual names of the columns you want to exclude
        exclude_columns = ["Sanziman", "Model_Yili"]
        cold_df = cold_df.drop(exclude_columns, axis=1)

        cold_df2 = df[exclude_columns]

        cold2 = csr_matrix(cold_df2.values)

        cold = csr_matrix(cold_df.values)

        final_sparse_matrix = hstack((hot2, cold, hot, cold2, hot_part2))

        final_csr_matrix = final_sparse_matrix.tocsr()

        return final_csr_matrix


if __name__ == '__main__':
    app.run()
