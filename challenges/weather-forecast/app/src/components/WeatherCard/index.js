import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';
import expandDayAbbr from './../../services/expandDayAbbr';

import './index.css';

const iconLow = require('./icon-low.svg');
const iconHigh = require('./icon-high.svg');

const WeatherCard = ({ forecast, onClickClose }) => {
    if (!forecast) {
        return null;
    }

    const today = forecast.forecastList[0];
    const nextDays = forecast.forecastList.slice(1, 6);

    return (
        <section className="weather-card">
            <div className="weather-card__close" title="Close" onClick={onClickClose}>x</div>
            <div className="weather-card__body">
                <div className="weather-card__city">{forecast.city}, {forecast.region} - {forecast.country}</div>
                <h2 className="weather-card__temperature">
                    {forecast.currentTemperature}ºC&nbsp;&nbsp;
                    <span title={forecast.currentConditionText}>{forecast.currentConditionText}</span>
                </h2>
                <table className="weather-card__now">
                    <tbody>
                        <tr>
                            <td className="weather-card__now__first-column">
                                <img src={iconLow} width="12" height="12" alt="Low"/><b>{today.low}º</b>
                                &nbsp;&nbsp;&nbsp;
                                <img src={iconHigh} width="12" height="12" alt="High"/><b>{today.high}º</b>
                            </td>
                            <td>
                                Wind chill <b>{forecast.windChill}ºC</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Wind <b>{forecast.windSpeed}km/h</b></td>
                            <td>Humidity <b>{forecast.humidity}%</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className="weather-card__footer">
                <tbody>
                    <tr>
                        {nextDays.map((day, key) => (
                            <td className="weather-card__weekday" key={key} data-order={key}>
                                <div>{expandDayAbbr(day.day)}</div>
                                <span className="weather-card__weekdays__temp">
                                    {day.low}º&nbsp;&nbsp;{day.high}º
                                </span>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

WeatherCard.propTypes = {
    forecast: forecastDataType,
    onClickClose: PropTypes.func.isRequired
};

export default WeatherCard;
