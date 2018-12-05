import React from 'react';
import PropTypes from 'prop-types';
import splitList from './../../services/splitList';
import { forecastDataType } from './../../types';

import './index.css';
import CapitalTable from './../CapitalTable';
import Author from './../Author';

const Footer = ({ forecasts }) => {
    const { firstChunk, secondChunk } = splitList(forecasts);

    return (
        <footer className="footer">
            <h3 className="footer__title">Capitals</h3>
            <div className="foooter__capitals">
                <CapitalTable order={1} forecasts={firstChunk}/>
                <CapitalTable order={2} forecasts={secondChunk}/>
            </div>
            <Author/>
        </footer>
    );
};

Footer.propTypes = {
    forecasts: PropTypes.arrayOf(forecastDataType)
};

export default Footer;
