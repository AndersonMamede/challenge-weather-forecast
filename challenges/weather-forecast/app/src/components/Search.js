import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input className="search-input" type="text" placeholder="Search for a city"/>
            </div>
        );
    }
}

export default Search;
