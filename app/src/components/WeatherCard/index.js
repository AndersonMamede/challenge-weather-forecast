import React from 'react';
import { Link } from 'react-router-dom';
import { forecastDataType } from './../../types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import dateToWeekday from './../../services/dateToWeekday';

import './index.css';

const iconLow = require('./icon-low.svg');
const iconHigh = require('./icon-high.svg');

const WeatherCard = ({ forecast }) => {
    forecast = forecast || {};

    const dataLoaded = Boolean(forecast.city);

    const today = dataLoaded ? forecast.forecastList[0] : null;
    const nextDays = dataLoaded ? forecast.forecastList.slice(1, 6) : null;

    return (
        <section className="weather-card">
            <SkeletonTheme color="#F1D5B2" highlightColor="#FDB46D">
                <Link to="?" className="weather-card__close" title="Close">x</Link>
                <div className="weather-card__body">
                    <div className="weather-card__city app__skeleton">
                        {dataLoaded
                            ? <span>{forecast.city} - {forecast.country}</span>
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
                                    {dataLoaded ? <b>{Math.round(today.low)}º</b> : <Skeleton width={45}/>}
                                    &nbsp;&nbsp;&nbsp;
                                    {dataLoaded ? <img src={iconHigh} width="12" height="12" alt="High"/> : ''}
                                    {dataLoaded ? <b>{Math.round(today.high)}º</b> : <Skeleton width={45}/>}
                                </td>
                                <td>
                                    {dataLoaded
                                        ? <span>Sensation <b>{Math.round(forecast.currentThermalSensation)}ºC</b></span>
                                        : <Skeleton width={140}/>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {dataLoaded
                                        ? <span>Wind <b>{Math.round(forecast.windSpeed)}km/h</b></span>
                                        : <Skeleton width={100}/>
                                    }
                                </td>
                                <td>
                                    {dataLoaded
                                        ? <span>Humidity <b>{Math.round(forecast.humidity)}%</b></span>
                                        : <Skeleton width={140}/>
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
                                            <div>{dateToWeekday(day.date)}</div>
                                            <div className="weather-card__weekdays__temp">
                                                {Math.round(day.low)}º&nbsp;&nbsp;{Math.round(day.high)}º
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
};

export default WeatherCard;
