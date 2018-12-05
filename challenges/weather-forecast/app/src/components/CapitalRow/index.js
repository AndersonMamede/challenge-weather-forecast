import React from 'react';
import { forecastDataType } from './../../types';

const CapitalRow = ({ forecast }) => (
    <tr>
        <td>{forecast.forecastList[0].low}º</td>
        <td>{forecast.forecastList[0].high}º</td>
        <td>{forecast.city}</td>
    </tr>
);

CapitalRow.propTypes = {
    forecast: forecastDataType.isRequired,
};

export default CapitalRow;
