import React from 'react';
import './index.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.input = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const searchedCity = this.input.current.value.trim();

        if (this.validate(searchedCity)) {
            this.props.onCitySearch(searchedCity);
        }
    }

    validate(searchedCity) {
        if (searchedCity.length === 0) {
            alert("A city name is required!");
            this.input.current.focus();
            return false;
        }

        return true;
    }

    render() {
        return (
            <section className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input className="search-bar__input" type="text" placeholder="Search a city" required
                        defaultValue={this.props.searchedCity}
                        ref={this.input}/>
                    <button className="search-bar__submit" type="submit" title="Search">
                        <img src={require('./search-icon.svg')} width="22" height="22" alt="Search"/>
                    </button>
                </form>
            </section>
        );
    }
}

export default SearchBar;
