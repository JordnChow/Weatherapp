import './WeatherDiv.css';
import { fetchWeather, fetchDefaultWeather } from '../fetchWeather.mjs';
import WeatherData from '../sections/WeatherData';
import WeatherHeader from '../sections/WeatherHeader';
import { useState, useEffect } from 'react';
import React from 'react';




export default function WeatherDiv() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [defaultWeather, setDefaultWeather] = useState(null);
    async function fetchDefaultWeather() {
        const weatherData = await fetchWeather('Sydney');
        console.log(weatherData[0])
        return weatherData[0];
    }
    useEffect(() => {
        async function getDefaultWeather() {
            const weatherData = await fetchDefaultWeather();
            setDefaultWeather(weatherData);
            console.log(weatherData.icon_link);
        }
        getDefaultWeather();
    }, []);

    return (
        <div className="WeatherDiv">
            <WeatherHeader name={city ? city : "Sydney"} />
            <form onSubmit={async (e) => {
                e.preventDefault();
                const weatherData = await fetchWeather(city);
                setWeather(weatherData[0]);
                console.log(weatherData);
            }}>
                <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                <button type="submit">Get Weather</button>
            </form>
            {weather ? (
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
                />
            ) : (
                defaultWeather && (
                    <WeatherData
                        temp={defaultWeather.temp}
                        feels_like={defaultWeather.feels_like}
                        temp_min={defaultWeather.temp_min}
                        temp_max={defaultWeather.temp_max}
                        humidity={defaultWeather.humidity}
                        weather={defaultWeather.weather}
                        wind={defaultWeather.wind}
                        visibility={defaultWeather.visibility}
                        date={defaultWeather.date}
                        icon_link={defaultWeather.icon_link}
                    />
                )
            )}
        </div>
    );
}
