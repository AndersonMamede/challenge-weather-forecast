import React, { Component } from 'react';
import Search from './Search';
import Capitals from './Capitals.js';

class Content extends Component {
    render() {
        return (
            <main className="content">
                <Search />
                <Capitals />
            </main>
        );
    }
}

export default Content;
