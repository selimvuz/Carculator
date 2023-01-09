from st_on_hover_tabs import on_hover_tabs as ht
import streamlit as st
import pandas as pd
import numpy as np

st.set_page_config(
    page_title="CalculCAR",
    page_icon="dollar",
    layout="centered",
)

st.title("CalculCAR")
st.markdown('<style>' + open('./style.css').read() +
            '</style>', unsafe_allow_html=True)

with st.sidebar:
    tabs = ht(tabName=['Price Estimation', 'Raw Data', 'About Us'],
              iconName=['price_check', 'query_stats', 'filter_vintage'], default_choice=0)

if tabs == 'Price Estimation':
    st.title("Car Price Estimation")
    brand = st.selectbox(
        'Car Brand',
        ('Alfa Romeo', 'Mitsubishi', 'MINI', 'Mazda', 'Cupra', 'SUZUKI', 'Subaru', 'Jeep', 'Ssangyong', 'Porsche', 'Mercedes-Benz', 'Honda', 'Toyota', 'Skoda', 'SEAT', 'Renault', 'Peugeot', 'Opel', 'Nissan', 'Land Rover', 'KIA', 'HYUNDAI', 'Ford', 'Fiat', 'Dacia', 'Citroen', 'BMW', 'Audi', 'Volvo', 'Volkswagen'))
    year = st.slider('Manufacturing Year', 2000, 2023, 2010)
    warranty = st.slider('Warranty Period (Months)', 0, 12, 3)
    color = st.select_slider(
        'Color',
        options=['Black', 'Blue-White', 'Black-Yellow', 'Light Gray', 'Metallic Green', 'Metallic Gray', 'Yellow', 'Dark Blue', 'Red', 'Silver', 'Orange', 'Green', 'Beige', 'Copper', 'Purple', 'Metallic White', 'Ivory', 'White'])
    fuel = st.select_slider(
        'Fuel Type',
        options=['Diesel', 'LPG', 'Petrol'])
    location = st.radio(
        "Location",
        (['Marmara', 'Ege', 'Akdeniz', 'Anadolu']))
    myButton = st.button("Calculate")

elif tabs == 'Raw Data':
    st.title("Raw Data")
    imageThree = ('./imageThree.png')
    st.image(imageThree, "")
    imageTwo = ('./imageTwo.png')
    st.image(imageTwo, "")
    imageFour = ('./imageFour.png')
    st.image(imageFour, "")

elif tabs == 'About Us':
    st.title("About Us")
    st.write('Yavuz Selim Doğdu - 190704009')
    st.write('Mehmet Yavuz Gökmen - 190704004')
