import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const CAPITALS1 = [
    'Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília',
    'Belem', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'
];

const CAPITALS2 = [
    {name: 'Rio de Janeiro', min: 15, max: 27},
    {name: 'São Paulo', min: 16, max: 28},
    {name: 'Belo Horizonte', min: 17, max: 29},
    {name: 'Brasília', min: 18, max: 30},
    {name: 'Belem', min: 19, max: 31},
    {name: 'Salvador', min: 20, max: 32},
    {name: 'Curitiba', min: 21, max: 33},
    {name: 'Fortaleza', min: 22, max: 34},
    {name: 'Manaus', min: 23, max: 35},
    {name: 'João Pessoa', min: 24, max: 36}
];

const weatherApiUrl = 'https://query.yahooapis.com/v1/public/yql';

ReactDOM.render(
    <App
        capitals1={CAPITALS1}
        capitals={CAPITALS2}
        weatherApiUrl={weatherApiUrl}/>,
    document.getElementById('root')
);
