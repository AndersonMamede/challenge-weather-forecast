import React from 'react';

import './index.css';

const Author = () => (
    <div className="author">
        Made
        with
        <img className="author-heart" src={require('./icon-heart.svg')} alt="Heart" width="16" height="16"/>
        by <a className="author-link" href="https://blog.andersonmamede.com.br/">Anderson Mamede</a>
    </div>
);

export default Author;
