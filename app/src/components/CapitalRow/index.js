import React from 'react';
import { forecastDataType } from './../../types';

import CapitalLink from './../CapitalLink';

const CapitalRow = ({ forecast }) => (
    <tr>
        <td className="capitals-column__temperature">{Math.round(forecast.forecastList[0].low)}º</td>
        <td className="capitals-column__temperature">{Math.round(forecast.forecastList[0].high)}º</td>
        <td><CapitalLink city={forecast.city}/></td>
    </tr>
);

CapitalRow.propTypes = {
    forecast: forecastDataType.isRequired,
};

export default CapitalRow;
