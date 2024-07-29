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
    const [fontSize, setFontSize] = useState(200)

    async function fetchDefaultWeather() {
        const weatherData = await fetchWeather('Sydney');
        return weatherData;
    }

    const handleCityChange = (e) => {
        const { value } = e.target
        if (value.length > 11) {
            setFontSize(fontSize - 3.5)
        }
        if(value.length < 11){
            setFontSize(200)
        }
        setCity(e.target.value)
    }

    useEffect(() => {
        async function getDefaultWeather() {
            const weatherData = await fetchDefaultWeather();
            setDefaultWeather(weatherData);
        }
        getDefaultWeather()
        setCity('Sydney')
    }, []);

    return (
        <div className="WeatherDiv">
            <WeatherHeader name={city} fontSize={fontSize} />
            <form className="input-container" onSubmit={async (e) => {
                e.preventDefault();
                const weatherData = await fetchWeather(city);
                setWeather(weatherData);
            }}>
                <input type="text" placeholder="Enter city" value={city} onChange={handleCityChange} />
                <button type="submit">Get Weather</button>
            </form>
            {weather ? (
                <WeatherData
                    temp={weather[0].temp}
                    feels_like={weather[0].feels_like}
                    temp_min={weather[0].temp_min}
                    temp_max={weather[0].temp_max}
                    humidity={weather[0].humidity}
                    weather={weather[0].weather}
                    wind={weather[0].wind}
                    visibility={weather[0].visibility}
                    date={weather[0].date}
                    icon_link={weather[0].icon_link}
                    pressure={weather[0].pressure}
                    raw_data={weather}
                    additionalDates={weather.slice(1)}
                />
            ) : (defaultWeather ? (
                <WeatherData
                    temp={defaultWeather[0].temp}
                    feels_like={defaultWeather[0].feels_like}
                    temp_min={defaultWeather[0].temp_min}
                    temp_max={defaultWeather[0].temp_max}
                    humidity={defaultWeather[0].humidity}
                    weather={defaultWeather[0].weather}
                    wind={defaultWeather[0].wind}
                    visibility={defaultWeather[0].visibility}
                    date={defaultWeather[0].date}
                    icon_link={defaultWeather[0].icon_link}
                    pressure={defaultWeather[0].pressure}
                    raw_data={defaultWeather}
                    additionalDates={defaultWeather.slice(1)}
                />
            ) : <p>Loading...</p>
            )}
        </div>
    );
}
