import React from 'react';
import PropTypes from 'prop-types';
import weatherForecastApi from './../../services/weatherForecastApi';

import './index.css';
import ErrorMessage from './../../components/ErrorMessage';
import Header from './../../components/Header';
import WeatherCard from './../../components/WeatherCard';
import Search from './../../components/Search';
import CapitalsSection from './../../components/CapitalsSection';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            capitalsForecasts: null,
            capitalsError: null,
            weatherCardForecast: null,
            weatherCardError: null
        };

        this.showWeatherCard = this.showWeatherCard.bind(this);
        this.closeWeatherCard = this.closeWeatherCard.bind(this);
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

    showWeatherCard(city) {
        const done = (weatherCardForecast, weatherCardError = null) => {
            this.setState({ weatherCardForecast, weatherCardError });
        };

        weatherForecastApi.getForecast(city)
            .then(forecasts => {
                forecasts ? done(forecasts[0]) : done(null, 'City not found');
            })
            .catch(error => done(null, `Error: could not load weather card data.\n(${error.toString()})`));
    }

    closeWeatherCard() {
        this.setState({ weatherCardForecast: null });
    }

    render() {
        return (
            <div className="app">
                <div className="app__wrapper">
                    <Header/>
                    <main>
                        {this.state.weatherCardForecast &&
                            <WeatherCard
                                forecast={this.state.weatherCardForecast}
                                onClickClose={this.closeWeatherCard}/>
                        }
                        {this.state.weatherCardError && <ErrorMessage message={this.state.weatherCardError}/>}
                        <Search onSubmit={this.showWeatherCard}/>
                        {this.state.capitalsForecasts && <CapitalsSection forecasts={this.state.capitalsForecasts}/>}
                        {this.state.capitalsError &&  <ErrorMessage message={this.state.capitalsError}/>}
                    </main>
                </div>
            </div>
        );
    }
}

AppContainer.propTypes = {
    capitals: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AppContainer;
