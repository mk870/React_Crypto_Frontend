# Crypto Mania (React Frontend)<img src="https://i.ibb.co/SrfdFSz/logo3.png" alt="logo3" border="0" align="center" width="100">
<img src="https://i.ibb.co/y4rKph5/Crypto-Mania-1.png" alt="Crypto-Mania-1" border="0">

## Project Summary 
* Created 9 pages using react-router (homepage, news, crypto-dashboard, crypto exchanges, my-watchlist, login, voice-commands,Crypto-coin-details and signup page)
* Used Alan-AI sdk for voice recognition and navigation.
* Used chart js to display each coin's historical price data.
* Spring boot Cryptomania app was used as the backend of the app.
* Also used a custom built crypto price predictor api to predict future prices.
* Finally used styled-components to style the entire application.

### **Resources Used**
***
**React Version :** 17.0.2  

**Language Used :** Javascript

**Dependencies**: Alan-AI, Jwt Decoder, React-router, Redux, Chart.js, React-icons, styled-components, react-alice-carousel, react-context, html-react-parser and axios.  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) 	![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white)	![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)

**For Web Framework Requirements**: npm install

**APIs**: Coinranking ,Context Api, crypto_price_predictor Api and cryptomania server (backend) 



### **Crypto Dashboard** 
* Uses react-alice-carousel to show each crypto currency price and % price change.
* Displays 100 crypto currencies using coinranking api via rapidApi service and also uses pagination.  

<img src="https://i.ibb.co/syRWTXK/Crypto-Mania-2.png" alt="Crypto-Mania-2" border="0"> 

### **Crypto Coin Details Page**  
* Displays a crypto coin's stats, historical data and features from coin ranking api.
* Utilizes Chart-js to display the historical price data with the ability to change the time period of the chart.
* Uses the crypto price predictor api to predict the price for the next 24 hrs, 3 days, 7 days and 14 days. This only applies to litecoin, Ethereum and Bitcoin.  

<img src="https://i.ibb.co/8dTqsfx/Crypto-Mania-3.png" alt="Crypto-Mania-3" border="0"> 

### **Voice Commands Page**  
* This page gives the user the voice instructions for using voice recognition for navigation and for the app to read you the news.  

<img src="https://i.ibb.co/ZczGCyB/Crypto-Mania-4.png" alt="Crypto-Mania-4" border="0"> 

### **Theme Color Change Feature** 
* Uses redux to store and change the theme color of the app.
* It allows the app to have a light and dark theme which is chosen on the navbar or sidebar depending onscreen size.  

<img src="https://i.ibb.co/HBhw3Gd/Crypto-Mania-5.png" alt="Crypto-Mania-5" border="0">  

### **News Page**  
* This page uses the crypto mania spring boot app to display the latest cryptocurrency news.
* It uses html Parser to convert html to proper readable words. 
* Also the app can read to the user the news using alan AI sdk.  

<img src="https://i.ibb.co/8Mf8vqS/Crypto-Mania-6.png" alt="Crypto-Mania-6" border="0">

### **MyWatchlist Page**  
* This page displays the client's crypto coins from the database and allows the client to delete their coins.

### **Productionization**
In this step, I deployed the app to heroku cloud.

**Live Implemantation:** [CryptoMania](https://react-cryptomania.herokuapp.com)
