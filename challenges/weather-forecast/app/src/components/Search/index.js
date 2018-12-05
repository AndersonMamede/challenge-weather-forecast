import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Search = ({ onSubmit }) => {
    let searchedTerm = '';

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(searchedTerm);
    }

    return (
        <section className="search-bar">
            <form className="search-bar__form" onSubmit={handleSubmit}>
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
    );
};

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Search;
