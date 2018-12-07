import React from 'react';
import { Link } from 'react-router-dom';
import { forecastDataType } from './../../types';

const CapitalRow = ({ forecast }) => (
    <tr>
        <td className="capitals-column__temperature">{forecast.forecastList[0].low}º</td>
        <td className="capitals-column__temperature">{forecast.forecastList[0].high}º</td>
        <td><Link className="capitals-city__link" to={`/city/${forecast.city}`}>{forecast.city}</Link></td>
    </tr>
);

CapitalRow.propTypes = {
    forecast: forecastDataType.isRequired,
};

export default CapitalRow;
