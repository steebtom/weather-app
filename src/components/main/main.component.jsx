import React,{ useState } from "react";
import Axios from "axios";

import Header from "../header/header.component";
import Content from "../content/content.component";
import Weathersearch from "../weathersearch/weathersearch.component";


const API_KEY = "3352729149c73266f5d23bbd95bca84d";


const Main = () => {

    const api_call = async e =>{

        e.preventDefault();

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${API_KEY}`;
        
        const request = Axios.get(url);
        const response = await request;
        console.log(response);

    }


    return (
        <div className="main">
            <Header />
            <Content>
                <Weathersearch api_call={ api_call } />
            </Content>
        </div>
    );
}

export default Main;