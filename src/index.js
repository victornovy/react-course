import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyChlDN2uJApNbwFMMeL1AxW86kLfCwyKB8';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));