import React from 'react';
import PropTypes from 'prop-types';
import weatherForecastApi from './../../services/weatherForecastApi';

import ErrorMessage from './../../components/ErrorMessage';
import WeatherCard from './../WeatherCard';

class WeatherCardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: null,
            error: null,
        };

        this.loadForecast = this.loadForecast.bind(this);
    }

    componentDidMount() {
        this.loadForecast();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const sameCity = this.state.forecast && nextProps.city === this.state.forecast.city;
        const sameForecast = nextState.forecast === this.state.forecast;
        return sameCity && sameForecast ? false : true;
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.city !== this.props.city) {
            this.loadForecast();
        }
    }

    loadForecast() {
        this.setState({ forecast: null, error: null });
        
        const done = (forecast, error = null) => {
            this.setState({ forecast, error });
        };

        weatherForecastApi.getForecastByCityName(this.props.city)
            .then(forecast => {
                forecast ? done(forecast) : done(null, 'City not found');
            })
            .catch(error => done(null, `Error: could not load weather card data.\n(${error.toString()})`));
    }
    
    render() {
        if (this.state.error) {
            return <ErrorMessage message={this.state.error}/>
        }

        return <WeatherCard forecast={this.state.forecast}/>
    }
}

WeatherCardContainer.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherCardContainer;
