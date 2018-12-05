import { string, number, shape, arrayOf } from 'prop-types';

const forecastDataType = shape({
    city: string.isRequired,
    region: string.isRequired,
    country: string.isRequired,
    forecastList: arrayOf(shape({
        day: string.isRequired,
        high: number.isRequired,
        low: number.isRequired,
        text: string.isRequired,
    })).isRequired,
    currentTemperature: number.isRequired,
    currentConditionText: string.isRequired,
    windSpeed: number.isRequired,
    windChill: number.isRequired,
    humidity: number.isRequired,
});

export { forecastDataType };
