import React from "react";


const Weatherdata = ({ weather }) => {
    const {temp, humidity, pressure} = weather;
    // console.log(weather);

    return (
        <div className="weather-data">
            <p className="weather__tagline">Weather forecast for <span className="weather-data__city">Auckland</span></p>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title">Temperature</p>
                    <p className="weather-data__value">{ temp }</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Humidity</p>
                    <p className="weather-data__value">{ humidity }</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Pressure</p>
                    <p className="weather-data__value">{ pressure }</p>
                </span>
            </div>
        </div>

    );
};

export default Weatherdata;