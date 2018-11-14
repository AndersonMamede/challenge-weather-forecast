import React from 'react';

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
                    <input className="search-bar__input" type="search" required
                        placeholder="Search a city..."
                        defaultValue={this.props.searchedCity}
                        ref={this.input}/>
                    <button type="submit">Search</button>
                </form>
            </section>
        );
    }
}

export default SearchBar;
