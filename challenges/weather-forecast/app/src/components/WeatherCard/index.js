import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import expandDayAbbr from './../../services/expandDayAbbr';

import './index.css';

const iconLow = require('./icon-low.svg');
const iconHigh = require('./icon-high.svg');

const WeatherCard = ({ forecast, onClickClose }) => {
    forecast = forecast || {};

    const dataLoaded = Boolean(forecast.city);

    const today = dataLoaded ? forecast.forecastList[0] : null;
    const nextDays = dataLoaded ? forecast.forecastList.slice(1, 6) : null;

    return (
        <section className="weather-card">
            <SkeletonTheme color="#F1D5B2" highlightColor="#FDB46D">
                <div className="weather-card__close" title="Close" onClick={onClickClose}>x</div>
                <div className="weather-card__body">
                    <div className="weather-card__city app__skeleton">
                        {dataLoaded
                            ? <span>{forecast.city}, {forecast.region} - {forecast.country}</span>
                            : <Skeleton width={250}/>
                        }
                    </div>
                    <h2 className="weather-card__temperature">
                        {dataLoaded ? `${forecast.currentTemperature}ºC` : <Skeleton/>}
                        &nbsp;&nbsp;
                        <span title={dataLoaded ? forecast.currentConditionText : ''}>
                            {dataLoaded ? forecast.currentConditionText : <Skeleton/>}
                        </span>
                    </h2>
                    <table className="weather-card__now">
                        <tbody>
                            <tr>
                                <td className="weather-card__now__first-column">
                                    {dataLoaded ? <img src={iconLow} width="12" height="12" alt="Low"/> : ''}
                                    {dataLoaded ? <b>{today.low}º</b> : <Skeleton width={45}/>}
                                    &nbsp;&nbsp;&nbsp;
                                    {dataLoaded ? <img src={iconHigh} width="12" height="12" alt="High"/> : ''}
                                    {dataLoaded ? <b>{today.high}º</b> : <Skeleton width={45}/>}
                                </td>
                                <td>
                                    {dataLoaded
                                        ? <span>Wind chill <b>{forecast.windChill}ºC</b></span>
                                        : <Skeleton width={120}/>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {dataLoaded
                                        ? <span>Wind <b>{forecast.windSpeed}km/h</b></span>
                                        : <Skeleton width={100}/>
                                    }
                                </td>
                                <td>
                                    {dataLoaded
                                        ? <span>Humidity <b>{forecast.humidity}%</b></span>
                                        : <Skeleton width={120}/>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table className="weather-card__footer">
                    <tbody>
                        <tr>
                            {dataLoaded
                                ? (
                                    nextDays.map((day, key) => (
                                        <td className="weather-card__weekday" key={key} data-order={key}>
                                            <div>{expandDayAbbr(day.day)}</div>
                                            <div className="weather-card__weekdays__temp">
                                                {day.low}º&nbsp;&nbsp;{day.high}º
                                            </div>
                                        </td>
                                    ))
                                ) : (
                                    <td><Skeleton height={42}/></td>
                                )
                            }
                        </tr>
                    </tbody>
                </table>
            </SkeletonTheme>
        </section>
    );
}

WeatherCard.propTypes = {
    forecast: forecastDataType,
    onClickClose: PropTypes.func.isRequired
};

export default WeatherCard;
