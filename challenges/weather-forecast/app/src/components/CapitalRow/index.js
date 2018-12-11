import React from 'react';
import { forecastDataType } from './../../types';

import CityLink from './../CityLink';

const CapitalRow = ({ forecast }) => (
    <tr>
        <td className="capitals-column__temperature">{forecast.forecastList[0].low}º</td>
        <td className="capitals-column__temperature">{forecast.forecastList[0].high}º</td>
        <td><CityLink city={forecast.city}/></td>
    </tr>
);

CapitalRow.propTypes = {
    forecast: forecastDataType.isRequired,
};

export default CapitalRow;
