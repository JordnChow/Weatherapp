import './WeatherDiv.css';
import { fetchWeather } from '../fetchWeather.mjs';
import {useState} from 'react';
import React from 'react';

export default function WeatherDiv(){
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    
    return (
        <div className="WeatherDiv">
            <h1>Weather</h1>
            <input type="text" placeholder="Enter city" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={async ()=>{
                const weatherData = await fetchWeather(city);
                setWeather(weatherData);
                console.log(weatherData);
            }}>Get Weather</button>
            {weather && 
            <div className="WeatherData">
                <img src={weather.icon_link} alt="weather icon"/>
                <p>Temperature: {weather.celcius.temp}</p>
                <p>Feels like: {weather.celcius.feels_like}</p>
                <p>Min Temperature: {weather.celcius.temp_min}</p>
                <p>Max Temperature: {weather.celcius.temp_max}</p>
                <p>Humidity: {weather.humidity}</p>
                <p>Weather: {weather.weather}</p>
                <p>Wind: {weather.wind}</p>
                <p>Visibility: {weather.visibility}</p>
                <p>Latest Update: {weather.date}</p>
            </div>}
        </div>
    )
}