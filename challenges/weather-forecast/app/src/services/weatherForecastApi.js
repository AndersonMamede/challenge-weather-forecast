import fahrenheitToCelsius from './fahrenheitToCelsius';

function getForecast(cityList) {
    return new Promise((resolve, reject) => {
        fetch(mountUrl(cityList))
            .then(response => response.json())
            .then(result => {
                if (!result || !result.query || !result.query.count) {
                    return resolve(null);
                }

                const { channel } = result.query.results;
                const channels = Array.isArray(channel) ? channel : [channel];

                return channels.map(normalizeForecastData);
            })
            .then(resolve)
            .catch(reject);
    });
};

const mountUrl = (cityList) => {
    cityList = Array.isArray(cityList) ? cityList : [cityList];
    
    const citiesWhereClause = `text="${cityList.join('" or text="')}"`;
    const woeidFilter = `select woeid from geo.places(1) where ${citiesWhereClause}`;
    const query = `select * from weather.forecast where woeid in (${woeidFilter}) and u='c'`;

    return `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`;
};

const normalizeForecastData = (data) => ({
    city: data.location.city,
    region: data.location.region,
    country: data.location.country,
    forecastList: data.item.forecast.map(item => {
        item.high = Number(item.high);
        item.low = Number(item.low);
        return item;
    }),
    currentTemperature: Number(data.item.condition.temp),
    currentConditionText: data.item.condition.text,
    windSpeed: Math.round(data.wind.speed),
    windChill: fahrenheitToCelsius(data.wind.chill),
    humidity: Number(data.atmosphere.humidity),
});

export default { getForecast, mountUrl };
