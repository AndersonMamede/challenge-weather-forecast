import React from 'react';
import PropTypes from 'prop-types';
import splitList from './../../services/splitList';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalTable from './../CapitalTable';

const CapitalsSection = ({ forecasts }) => {
    const { firstChunk, secondChunk } = splitList(forecasts);

    return (
        <section className="capitals">
            <div className="capitals__content">
                <h3 className="capitals__title">Capitals</h3>
                <div className="capitals__content">
                    <CapitalTable forecasts={firstChunk} side="left"/>
                    <CapitalTable forecasts={secondChunk} side="right"/>
                </div>
            </div>
        </section>
    );
};

CapitalsSection.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType)
};

export default CapitalsSection;
