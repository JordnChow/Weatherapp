import './WeatherDiv.css';
import { fetchWeather } from '../fetchWeather.mjs';
import WeatherData from '../sections/WeatherData';
import WeatherHeader from '../sections/WeatherHeader';
import {useState} from 'react';
import React from 'react';

export default function WeatherDiv(){
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    
    return (
        <div className="WeatherDiv">
            <WeatherHeader name={city}/>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const weatherData = await fetchWeather(city);
                setWeather(weatherData[0]);
                console.log(weatherData);
                
            }}>
            <input type="text" placeholder="Enter city" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
            </form>
            {weather && 
            <WeatherData 
                temp={weather.temp}
                feels_like={weather.feels_like}
                temp_min={weather.temp_min}
                temp_max={weather.temp_max}
                humidity={weather.humidity}
                weather={weather.weather}
                wind={weather.wind}
                visibility={weather.visibility}
                date={weather.date}
                icon_link={weather.icon_link}
            />}
        </div>
    )
}