import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const CAPITALS = [
    'Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília',
    'Belem', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'
];

const weatherApiUrl = 'https://query.yahooapis.com/v1/public/yql';

ReactDOM.render(
    <App
        capitals={CAPITALS}
        weatherApiUrl={weatherApiUrl}/>,
    document.getElementById('root')
);
