import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const Search = ({ onSubmit }) => {
    let searchedTerm = '';

    function handleSubmit(event, history) {
        event.preventDefault();

        if (searchedTerm.length) {
            history.push('/city/' + searchedTerm);
        }
    }

    return (
        <Route render={({ history }) => (
            <section className="search-bar">
                <form className="search-bar__form" onSubmit={(event) => handleSubmit(event, history)}>
                    <input
                        className="search-bar__input"
                        type="search"
                        required
                        placeholder="Search a city"
                        pattern=".*\S.*"
                        title="Must contain at least one non-empty character."
                        autoFocus
                        defaultValue={searchedTerm}
                        onChange={(event) => (searchedTerm = event.target.value)}/>
                    <button className="search-bar__submit" type="submit" title="Search">
                        <img src={require('./icon-search.svg')} width="22" height="22" alt="Search"/>
                    </button>
                </form>
            </section>
        )}/>
    );
};

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Search;
