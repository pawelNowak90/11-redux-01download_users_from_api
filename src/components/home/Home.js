import React, { Component } from 'react';

import Btn from './Btn';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav>
                <Btn classes="btn-primary" name="Load Users" />
                <Btn classes="btn-secondary" name="Add one User to list" />
                <Btn classes="btn-danger" name="Remove all users" />
            </nav>
        );
    }
}
 
export default Home;