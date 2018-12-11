import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const CityLink = ({ city }) => (
    <Link className="city__link" to={`?city=${city}`}>{city}</Link>
);

CityLink.propTypes = {
    city: PropTypes.string.isRequired
};

export default CityLink;
