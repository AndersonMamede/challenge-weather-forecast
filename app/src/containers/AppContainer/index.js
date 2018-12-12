import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import queryString from 'query-string';
import Favicon from 'react-favicon';
import PropTypes from 'prop-types';
import weatherForecastApi from './../../services/weatherForecastApi';

import './index.css';
import ErrorMessage from './../../components/ErrorMessage';
import Header from './../../components/Header';
import WeatherCardContainer from './../../components/WeatherCardContainer';
import Search from './../../components/Search';
import Footer from './../../components/Footer';

const favicon = require('./../../favicon.ico');

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            capitalsForecasts: null,
            capitalsError: null,
        };

        this.loadCapitalsForecasts = this.loadCapitalsForecasts.bind(this);
        this.handleRenderWeatherCardContainer = this.handleRenderWeatherCardContainer.bind(this);
    }

    componentDidMount() {
        this.loadCapitalsForecasts();
    }

    loadCapitalsForecasts() {
        const done = (capitalsForecasts, capitalsError = null) => {
            this.setState({ capitalsForecasts, capitalsError });
        };

        weatherForecastApi.getForecast(this.props.capitals)
            .then(forecasts => {
                forecasts ? done(forecasts) : done(null, 'Capitals forecasts not found');
            })
            .catch(error => done(null, `Error: could not load capitals.\n(${error.toString()})`));
    }

    handleRenderWeatherCardContainer() {
        const { city } = queryString.parse(window.location.search);

        if (!city) {
            return null;
        }

        document.title = `${city} - Weather forecast`;
        window.scrollTo(0, 0);
        return <WeatherCardContainer city={city}/>;
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Favicon url={favicon}/>
                    <div className="app__wrapper">
                        <Header/>
                        <div className="app__main">
                            <Route path='/' render={this.handleRenderWeatherCardContainer}/>
                            <Search/>
                        </div>
                        {this.state.capitalsError &&  <ErrorMessage message={this.state.capitalsError}/>}
                        {this.state.capitalsForecasts &&
                            <Footer forecasts={this.state.capitalsForecasts}/>
                        }
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

AppContainer.propTypes = {
    capitals: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AppContainer;
