import React, { Component } from 'react';

import BookList from '../containers/BookList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div>
                <BookList />
            </div>
        );
    }
}