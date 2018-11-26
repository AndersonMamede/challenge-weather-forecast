import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const CAPITALS = [
    'Brasília', 'Amsterdam', 'London', 'Dublin', 'Berlin',
    'London', 'Lisbon', 'Paris', 'Brussels', 'Madrid'
];

const weatherApiUrl = 'https://query.yahooapis.com/v1/public/yql';

ReactDOM.render(
    <App
        capitals={CAPITALS}
        weatherApiUrl={weatherApiUrl}/>,
    document.getElementById('root')
);
