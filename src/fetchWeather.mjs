const api_key = '9365a98bda1db63ee61601e9e00b0130';

function convertUnixToDay(d){
    const date= new Date(d * 1000)
    return date.getUTCDate() 
}

function return5dayForcast(weather) {
    const dates = [];
    const prev = [];
    weather.forEach(item => {
        const dt1 = convertUnixToDay(item.date_unix)
        if(dates.includes(dt1)){
            return;
        } else {
            dates.push(dt1)
            prev.push(item)
        }
    })
    return prev
}


export const fetchWeather = async (city) => {
    const locationRaw = await fetchLocation(city);
    const lat = locationRaw.lat;
    const lon = locationRaw.lon;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`);
    // console.log(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)
    const data = await response.json();
    const formattedData = formatResponse(data)
    return return5dayForcast(formattedData)
}

const fetchLocation = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`);
    const data = await response.json();
    return data[0];
}

const formatResponse = (data) => {
    const formattedData = [];
    data.list.forEach((item) => {
        formattedData.push({
            date: item.dt_txt,
            date_unix: item.dt,
            temp: convertToCelcius(item.main.temp),
            feels_like: convertToCelcius(item.main.feels_like),
            temp_min: convertToCelcius(item.main.temp_min),
            temp_max: convertToCelcius(item.main.temp_max),
            humidity: item.main.humidity,
            weather: item.weather[0].description,
            wind: item.wind.speed,
            visibility: item.visibility,
            icon_link: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
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

// fetchWeather('London').then((data) => console.log(data));