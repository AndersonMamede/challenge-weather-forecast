import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

const CAPITALS = [
    'Brasília', 'Amsterdam', 'London', 'Dublin', 'Berlin',
    'Tokyo', 'Lisbon', 'Paris', 'Brussels', 'Madrid'
];

ReactDOM.render(
    <AppContainer capitals={CAPITALS}/>,
    document.getElementById('root')
);
