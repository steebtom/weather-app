import React from "react";

import Header from "../header/header.component";


const API_KEY = "3352729149c73266f5d23bbd95bca84d";
const url = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


const Main = () => {
    return (
        <div className="main">
            <Header />
        </div>
    );
}

export default Main;