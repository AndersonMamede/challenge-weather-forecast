import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalRow from './../CapitalRow';

const CapitalTable = ({ forecasts }) => (
    <div className="capitals__column-wrapper">
        <table className="capitals__table" border="0">
            <thead>
                <tr>
                    <th className="capitals__table-temp__header">Min</th>
                    <th className="capitals__table-temp__header">Max</th>
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
};

export default CapitalTable;
