import React from 'react';
import PropTypes from 'prop-types';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalTable from './../CapitalTable';

const CapitalsSection = ({ forecasts }) => {
    function splitForecastsIntoChunks(forecasts) {
        if (!forecasts) {
            return [];
        }
    
        const firstHalf = forecasts.slice(0, forecasts.length/2);
        const secondHalf = forecasts.slice(forecasts.length/2);
        return [ firstHalf, secondHalf ];
    };
    
    return (
        <section className="capitals">
            <div className="capitals__content">
                <h3 className="capitals__title">Capitals</h3>
                <div className="capitals__content">
                    {splitForecastsIntoChunks(forecasts).map((forecastsChunk, key) =>
                        <CapitalTable
                            key={key}
                            forecasts={forecastsChunk}
                            side={(key % 2) === 1 ? 'right' : 'left'}/>
                    )}
                </div>
            </div>
        </section>
    );
};

CapitalsSection.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType)
};

export default CapitalsSection;
