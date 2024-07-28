const api_key = '9365a98bda1db63ee61601e9e00b0130';

export const fetchWeather = async (city) => {
    const locationRaw = await fetchLocation(city);
    const lat = locationRaw.lat;
    const lon = locationRaw.lon;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`);
    console.log(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)
    const data = await response.json();
    return formatResponse(data);
}

const fetchLocation = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`);
    const data = await response.json();
    return data[0];
}

const formatResponse = (data) => {
    const data1 = data.list[0];
    return {
        celcius:{
            temp:convertToCelcius(data1.main.temp),
            feels_like:convertToCelcius(data1.main.feels_like),
            temp_min:convertToCelcius(data1.main.temp_min),
            temp_max:convertToCelcius(data1.main.temp_max),
        },
        farenheit:{
            temp: convertToFarenheit(data1.main.temp),
            feels_like: convertToFarenheit(data1.main.feels_like),
            temp_min: convertToFarenheit(data1.main.temp_min),
            temp_max: convertToFarenheit(data1.main.temp_max),
        },
        humidity: data1.main.humidity + "%",
        weather: data1.weather[0].description,
        wind: data1.wind.speed + "m/s",
        visibility: data1.visibility + "m",
        date: data1.dt_txt,
        icon_link: `http://openweathermap.org/img/w/${data1.weather[0].icon}.png`
    }
}

const convertToCelcius = (temp) => {
    return Math.floor(temp - 273.15) + "°C";
}
const convertToFarenheit = (temp) => {
    return Math.floor((temp - 273.15) * 9 / 5 + 32) + "°F";
}

fetchWeather('Beijing').then(console.log);