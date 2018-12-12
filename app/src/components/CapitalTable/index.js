import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalRow from './../CapitalRow';

const CapitalTable = ({ order, forecasts }) => (
    <div className="capitals__column-wrapper" data-order={order}>
        <table className="capitals__table" border="0">
            <thead>
                <tr>
                    <th className="capitals-column__temperature">Min</th>
                    <th className="capitals-column__temperature">Max</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast, key) =>
                    <CapitalRow key={key} forecast={forecast}/>
                )}
            </tbody>
        </table>
    </div>
);

CapitalTable.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType).isRequired,
    order: PropTypes.number.isRequired,
};

CapitalTable.defaultProps = {
    order: 1,
}
    
export default CapitalTable;
