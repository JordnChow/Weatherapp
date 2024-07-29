import React from "react";
import './styles/weatherData.css';

export default function WeatherData(props) {
    return (
        <div className="Weather_data_container">
            <div className="WeatherData">
                <div className="temperature" id="temperature">


                    <table id="temp_table">
                        <tbody>
                            <tr>
                                <td id="temp"><img src={props.icon_link} alt="weather icon" />
                                    <span className="temp_value_main">{props.temp}</span>
                                </td>
                                <td>
                                    <table className="mini_temps">
                                        <tbody>
                                            <tr id="feels_like"><td><span className="temp_value">Feels like: {props.feels_like}</span></td></tr>
                                            <tr id="temp_min"><td><span className="temp_value">Min Temperature: {props.temp_min}</span></td></tr>
                                            <tr id="temp_max"><td><span className="temp_value">Max Temperature: {props.temp_min}</span></td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="weather_description">
                        <tbody>
                            <tr>
                                <td>
                                    <table className="weather_description2">
                                        <tbody>
                                            <tr id="website">Weather App</tr>
                                            <tr id="date">{props.date}</tr>
                                            <tr id="overview">{props.weather}</tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td id="humidity">Humidity:</td>
                            <td>{props.humidity}%</td>
                            <td id="weather">Weather:</td>
                            <td>{props.weather}</td>
                        </tr>
                        <tr>
                            <td id="pressure">Pressure:</td>
                            <td>{props.pressure} hPa</td>
                            <td id="visibility">Visibility:</td>
                            <td>{props.visibility} m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}