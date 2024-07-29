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
                <table id="weather_stats2">
                    <tbody>
                        <tr>
                            <td id="humidity">Humidity:</td>
                            <td>{props.humidity}%</td>
                            <td id="weather">Wind:</td>
                            <td>{props.wind}m/s</td>
                            <td id="pressure">Pressure:</td>
                            <td>{props.pressure} hPa</td>
                            <td id="visibility">Visibility:</td>
                            <td>{props.visibility} m</td>
                        </tr>
                    </tbody>
                </table>
                <table className="ForecastContainer">
                    <tbody>
                        <tr>
                            {props.additionalDates.map((forecast, index) => (
                                <td key={index} className="ForecastDay">
                                    <p>{unixToDay(forecast.date_unix)}</p>
                                    <img src={forecast.icon_link} alt="Weather Icon" />
                                    <p>Temp: {forecast.temp}</p>
                                    <p>Weather: {forecast.weather}</p>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

function unixToDay(unix){
    const date = new Date(unix * 1000)
    const dayOfWeekIndex = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    console.log(dayOfWeekIndex, dayOfWeek)
    return dayOfWeek
}