import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';

const Search = () => {
    let searchedTerm = '';

    function handleSubmit(event, history) {
        event.preventDefault();

        if (searchedTerm.length) {
            history.push({
                search: `?city=${searchedTerm}`
            });
        }
    }

    function handleChange(event) {
        searchedTerm = event.target.value;
    }

    return (
        <Route render={({ history }) => (
            <section className="search-bar">
                <form className="search-bar__form" onSubmit={(event) => handleSubmit(event, history)}>
                    <input
                        className="search-bar__input"
                        type="search"
                        placeholder="Search a city"
                        pattern=".*\S.*"
                        title="Must contain at least one non-empty character."
                        required
                        autoFocus
                        defaultValue={searchedTerm}
                        onChange={handleChange}/>
                    <button className="search-bar__submit" type="submit" title="Search">
                        <img src={require('./icon-search.svg')} width="22" height="22" alt="Search"/>
                    </button>
                </form>
            </section>
        )}/>
    );
};

export default Search;
