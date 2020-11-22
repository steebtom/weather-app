import React,{ useState } from "react";
import Axios from "axios";

import Context from "../../Context"

import Header from "../header/header.component";
import Content from "../content/content.component";
import Weathersearch from "../weathersearch/weathersearch.component";
import Weatherdata from "../weatherdata/weatherdata.component";


const API_KEY = "3352729149c73266f5d23bbd95bca84d";


const Main = () => {

    const [weather, setWeather] = useState();

    const api_call = async e =>{

        e.preventDefault();

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${API_KEY}&units=metric`;
        
        const request = Axios.get(url);
        const response = await request;
        setWeather(response.data.main);

    }
    weather && console.log(weather);


    return (
        <div className="main">
            <Header />
            <Content>
                <Weathersearch api_call={ api_call } />
                { weather && <Weatherdata weather={ weather } /> }
            </Content>
        </div>
    );
}

export default Main;