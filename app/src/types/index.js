import { string, number, shape, arrayOf, instanceOf } from 'prop-types';

const forecastDataType = shape({
    city: string.isRequired,
    country: string.isRequired,
    forecastList: arrayOf(shape({
        date: instanceOf(Date).isRequired,
        high: number.isRequired,
        low: number.isRequired,
    })).isRequired,
    currentTemperature: number.isRequired,
    currentConditionText: string.isRequired,
    currentThermalSensation: number.isRequired,
    windSpeed: number.isRequired,
    humidity: number.isRequired,
});

export { forecastDataType };
