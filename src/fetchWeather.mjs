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
    const formattedData = [];
    data.list.forEach((item) => {
        formattedData.push({
            date: item.dt_txt,
            temp: convertToCelcius(item.main.temp),
            feels_like: convertToCelcius(item.main.feels_like),
            temp_min: convertToCelcius(item.main.temp_min),
            temp_max: convertToCelcius(item.main.temp_max),
            humidity: item.main.humidity,
            weather: item.weather[0].description,
            wind: item.wind.speed,
            visibility: item.visibility,
            icon_link: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            pressure: item.main.pressure
        });
    })
   return formattedData
}

const convertToCelcius = (temp) => {
    return Math.floor(temp - 273.15) + "°C";
}
const convertToFarenheit = (temp) => {
    return Math.floor((temp - 273.15) * 9 / 5 + 32) + "°F";
}

fetchWeather('London').then((data) => console.log(data[0]));