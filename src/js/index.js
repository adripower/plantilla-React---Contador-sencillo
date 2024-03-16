//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";








let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;

// un contador del 0 al 9 segundo y cuando este llega a 9 le suma 1 al siguiente let


setInterval(function(){
num1 ++;
    if (num1 > 9) {
        num1 = 0;
        num2 ++;
        
    }if(num2 > 9) {
        num2 = 0;
        num3 ++
    }if (num3 > 9) {
        num3 = 0;
        mun4 ++;
    }if (num4 > 9) {
        num4 = 0;
        num5 ++;
    }if (num5 > 9){
        num5 = 0;
        num6 ++;
    }if (num6 > 9){
        num6 = 0;
        num7 ++;
    }if (num7 > 9){
        num7 = 0;
        num8 ++;
    }if (num8 > 9){
        num8 = 0;
    
    }  
   

    //render your react application
    ReactDOM.render(<Home  digito1={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6} digito7={num7} digito8={num8} />, document.querySelector("#app"));

},1000);



