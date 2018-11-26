import React, { Component } from 'react';
import WeatherCard from './components/WeatherCard/';
import SearchBar from './components/SearchBar/';
import CapitalTable from './components/CapitalTable/';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedCity: '',
            capitals: []
        };

        this.handleCitySearch = this.handleCitySearch.bind(this);
    }

    componentDidMount() {
        this.loadCapitalsForecast();
    }

    handleCitySearch(searchedCity) {
        this.setState({ searchedCity: searchedCity });
    }

    loadCapitalsForecast() {
        const capitalsWhereClause = `where text="${this.props.capitals.join('" or text="')}"`;
        const woeidFilter = `select woeid from geo.places(1) ${capitalsWhereClause}`;
        const query = `select * from weather.forecast where woeid in (${woeidFilter}) and u='c'`;

        fetch(`${this.props.weatherApiUrl}?q=${query}&format=json`)
            .then(result => result.json())
            .then(data => {
                if (!data || !data.query || !data.query.count) {
                    return;
                }

                const capitals = [];

                data.query.results.channel.forEach((capital, key) => {
                    capitals.push({
                        key,
                        name: capital.location.city,
                        min: capital.item.forecast[0].low,
                        max: capital.item.forecast[0].high
                    });
                });

                this.setState({ capitals });
            })
            .catch(console.error);
    }

    render() {
        return (
            <React.StrictMode>
                <div className="app">
                    <header className="header">
                        <h1 className="header__title">Weather forecast</h1>
                    </header>
                    <main className="content">
                        <WeatherCard searchedCity={this.state.searchedCity}/>
                        <SearchBar
                            searchedCity={this.state.searchedCity}
                            onCitySearch={this.handleCitySearch}/>
                        <CapitalTable capitals={this.state.capitals}/>
                    </main>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;
