import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const CapitalLink = ({ city }) => (
    <Link className="capital__link" to={`?city=${city}`}>{city}</Link>
);

CapitalLink.propTypes = {
    city: PropTypes.string.isRequired
};

export default CapitalLink;
