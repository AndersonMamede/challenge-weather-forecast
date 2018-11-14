import React from 'react';

class WeatherCard extends React.Component {
    render() {
        return (
            <section className="weather-card">
                <h2>Searched city: {this.props.searchedCity}</h2>
            </section>
        );
    }
}

export default WeatherCard;
