import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function displayWeather(response) {
        alert(`The weather in New York is ${response.data.main.temp}°C`);
    }


    let apiKey = "203da696788c9b8d29dc0497010394bf";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
   

    axios.get(apiUrl).then(displayWeather);
    
    return <h2>Weather React</h2>

    
}