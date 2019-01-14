import stringToDate from './stringToDate';

/*
 * As of January 2019, Yahoo Weather API is no longer available.
 * In order to keep the app working, the API had to be changed.
 * No other directly compatible API was found but it was possible to get
 * the same data using two other APIs:
 * - OpenWeatherMap (https://openweathermap.org/) for current weather of multiple cities, and
 * - APIXU (https://www.apixu.com/) for a single city with forecasts
 */

function getMultipleForecastsById(idList) {
    if (!Array.isArray(idList)) {
        idList = [idList];
    }

    const API_URL = 'https://api.openweathermap.org/data/2.5/';
    const API_KEY = '7291930c0cdcf0db0603d6580777ccda';
    
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}group?appid=${API_KEY}&units=metric&id=${idList.join(',')}`)
            .then(response => response.json())
            .then(result => {
                if (!result || !parseInt(result.cnt)) {
                    return resolve(null);
                }

                const forecasts = result.list.map(item => ({
                    city: item.name,
                    country: item.sys.country,
                    forecastList: [{
                        date: new Date(),
                        high: item.main.temp_max,
                        low: item.main.temp_min,
                    }],
                    currentTemperature: Number(item.main.temp),
                    currentConditionText: item.weather[0].description,
                    currentThermalSensation: 0,
                    windSpeed: Number(item.wind.speed),
                    humidity: Number(item.main.humidity),
                }));

                resolve(forecasts);
            })
            .then(resolve)
            .catch(reject);
    });
}

function getForecastByCityName(cityName, days = 6) {
    const API_URL = `https://api.apixu.com/v1/forecast.json`;
    const API_KEY = 'fe75c0c456d94398a0b120256191101';
    
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}?key=${API_KEY}&days=${days}&q=${cityName}`)
            .then(response => response.json())
            .then(result => {
                if (!result || !result.location || !result.current) {
                    return resolve(null);
                }

                const forecast = {
                    city: result.location.name,
                    country: result.location.country,
                    forecastList: result.forecast.forecastday.map(item => ({
                        date: stringToDate(item.date),
                        high: item.day.maxtemp_c,
                        low: item.day.mintemp_c,
                    })),
                    currentTemperature: result.current.temp_c,
                    currentConditionText: result.current.condition.text,
                    currentThermalSensation: result.current.feelslike_c,
                    windSpeed: result.current.wind_kph,
                    humidity: result.current.humidity,
                };

                resolve(forecast);
            })
            .catch(reject);
    });
}

export default { getMultipleForecastsById, getForecastByCityName };
