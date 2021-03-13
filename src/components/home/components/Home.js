import React, { Component } from 'react';

import Btn from './Btn';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }
        URL = 'https://randomuser.me/api/?results=5';

    handleClick = () => {
        console.log('Klikles sobie w btn');
    }

    loadUsers = () => {
        fetch(this.URL)
            .then(res => res.json())
            .then(data => this.setState({users:data.results}))
            .catch(error => console.log('Wystapil błąd !'));
    }

    render() { 
        return (
            <nav>
                <Btn classes="btn-primary" name="Load Users" handle={ this.loadUsers } />
                <Btn classes="btn-secondary" name="Add one User to list" handle={ this.handleClick } />
                <Btn classes="btn-danger" name="Remove all users" />
            </nav>
        );
    }
}
 
export default Home;