import React, { Component }  from 'react';

class SearchBar extends Component {

    handleSearchChange(e) {
        console.info(e.target.value);
    }

    render() {
        return <input name="search" type="text" onChange={this.handleSearchChange} />
    }
}

export default SearchBar;