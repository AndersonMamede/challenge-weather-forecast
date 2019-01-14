import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

// List of city ID (city.list.json.gz) can be downloaded here http://bulk.openweathermap.org/sample/
const CAPITALS = [
    { id: '3410315', name: 'Brasília' },
    { id: '2759794', name: 'Amsterdam' },
    { id: '2643743', name: 'London' },
    { id: '2964574', name: 'Dublin' },
    { id: '2950159', name: 'Berlin' },
    { id: '1850147', name: 'Tokyo' },
    { id: '2267057', name: 'Lisbon' },
    { id: '6455259', name: 'Paris' },
    { id: '2800866', name: 'Brussels' },
    { id: '6359304', name: 'Madrid' },
];

ReactDOM.render(
    <AppContainer capitals={CAPITALS}/>,
    document.getElementById('root')
);
