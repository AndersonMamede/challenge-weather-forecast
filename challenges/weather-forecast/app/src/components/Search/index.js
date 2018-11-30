import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Search = ({ onSubmit }) => {
    let searchedTerm = 'Amsterdam';

    return (
        <section className="search-bar">
            <form onSubmit={(event) => { event.preventDefault(); onSubmit(searchedTerm); }}>
                <input
                    className="search-bar__input"
                    type="search"
                    required
                    placeholder="Search a city"
                    pattern="[^\s]{1,}"
                    title="Must contain at least one non-empty character."
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
