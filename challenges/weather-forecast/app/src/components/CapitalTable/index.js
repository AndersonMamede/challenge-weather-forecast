import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType, sideType } from './../../types';

import './index.css';
import CapitalRow from './../CapitalRow';

const CapitalTable = ({ side, forecasts }) => (
    <div className="capitals__column-wrapper">
        <table className="capitals__table" data-side={side} border="0">
            <thead>
                <tr>
                    {side === 'right' && <th></th>}
                    <th>Min</th>
                    <th>Max</th>
                    {side === 'left' && <th></th>}
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast, key) =>
                    <CapitalRow key={key} forecast={forecast} side={side}/>
                )}
            </tbody>
        </table>
    </div>
);

CapitalTable.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType).isRequired,
    side: sideType.isRequired,
};

CapitalTable.defaultProps = {
    side: 'left'
};

export default CapitalTable;
