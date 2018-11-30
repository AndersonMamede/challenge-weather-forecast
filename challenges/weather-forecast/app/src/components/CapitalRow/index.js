import React from 'react';
import { forecastDataType, sideType } from './../../types';

const CapitalRow = ({ side, forecast }) => (
    <tr>
        {side === 'right' && <td>{forecast.city}</td>}
        <td>{forecast.forecastList[0].low}º</td>
        <td>{forecast.forecastList[0].high}º</td>
        {side === 'left' && <td>{forecast.city}</td>}
    </tr>
);

CapitalRow.propTypes = {
    forecast: forecastDataType.isRequired,
    side: sideType.isRequired,
};

CapitalRow.defaultProps = {
    side: 'left'
};

export default CapitalRow;
