import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import queryString from 'query-string';
import Favicon from 'react-favicon';
import PropTypes from 'prop-types';
import weatherForecastApi from './../../services/weatherForecastApi';

import './index.css';
import ProjectBadge from './../../components/ProjectBadge';
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

        const capitalIdList = this.props.capitals.map(capital => capital.id);

        weatherForecastApi.getMultipleForecastsById(capitalIdList)
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
                    <ProjectBadge url="https://github.com/AndersonMamede/challenge-weather-forecast/" />
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
    capitals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired
};

export default AppContainer;
