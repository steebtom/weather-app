import React,{ useState } from "react";
import Axios from "axios";

import Context from "../../Context"

import Header from "../header/header.component";
import Content from "../content/content.component";
import Weathersearch from "../weathersearch/weathersearch.component";
import Weatherdata from "../weatherdata/weatherdata.component";
import Error from "../error/error.component";


const API_KEY = "3352729149c73266f5d23bbd95bca84d";


const Main = () => {

    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const [error, setError] = useState();

    const api_call = async e =>{

        e.preventDefault();
        const location= e.target.elements.location.value;
        if(!location) return setError("Please enter the name of a city"), setWeather(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        
        const request = Axios.get(url);
        const response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);

    }
    weather && console.log(weather);


    return (
        <div className="main">
            <Header/>
            <Content>
                <Context.Provider value={{ api_call, weather, city }} >
                    <Weathersearch/>
                    { weather && <Weatherdata/> }
                    { error && <Error error = {error}/> }
                </Context.Provider>
            </Content>
        </div>
    );
}

export default Main;