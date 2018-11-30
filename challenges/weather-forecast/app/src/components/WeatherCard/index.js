import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';
import expandDayAbbr from './../../services/expandDayAbbr';

import './index.css';

const WeatherCard = ({ forecast, onClickClose }) => {
    const today = forecast.forecastList[0];
    const nextDays = forecast.forecastList.slice(1, 6);

    return (
        <section className="weather-card">
            <div className="weather-card__close" onClick={onClickClose}>x</div>
            <div className="weather-card__detail">{forecast.city}, {forecast.region} - {forecast.country}</div>
            <h2>{forecast.currentTemperature}º {forecast.currentConditionText}</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={require('./icon-low.svg')} width="12" height="12" alt="Low" title="Low"/>
                                <span>{today.low}º</span>
                                <img src={require('./icon-high.svg')} width="12" height="12" alt="High" title="High"/>
                                <span>{today.high}º</span>
                            </td>
                            <td>Wind chill <b>{forecast.windChill}º</b></td>
                        </tr>
                        <tr>
                            <td>Wind <b>{forecast.windSpeed}km/h</b></td>
                            <td>Humidity <b>{forecast.humidity}%</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            {nextDays.map((day, key) => (
                                <td key={key}>
                                    <div>{expandDayAbbr(day.day)}</div>
                                    <span>{day.low}º&nbsp;{day.high}º</span>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

WeatherCard.propTypes = {
    forecast: forecastDataType.isRequired,
    onClickClose: PropTypes.func.isRequired
};

export default WeatherCard;
