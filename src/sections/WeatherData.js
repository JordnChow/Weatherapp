import React from "react";
import './styles/weatherData.css';  

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <div className="temperature" id="temperature">
                <img src={props.icon_link} alt="weather icon" />
                <p id="temp">Temperature: {props.temp}</p>
                <p id="feels_like">Feels like: {props.feels_like}</p>
                <p id="temp_min">Min Temperature: {props.temp_min}</p>
                <p id="temp_max">Max Temperature: {props.temp_max}</p>
            </div>
            <table id="">
                <tr>
                    <td id="humidity">Humidity: {props.humidity}%</td>
                    <td id="weather">Weather: <br/>{props.weather}</td>
                </tr>
                <tr>
                    <td id="wind">Wind: {props.wind}m/s</td>
                    <td id="visibility">Visibility: <br/>{props.visibility}m</td>
                </tr>
                <tr>
                    <td id="pressure">Pressure: {props.pressure}hPa</td>
                    <td id="date">Latest Update: {props.date}</td>
                </tr>
            </table>
        </div>
    )

}