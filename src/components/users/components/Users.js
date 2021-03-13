import React, { Component, Fragment } from 'react';

import User from './User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    URL = 'https://randomuser.me/api/?results=5';

    componentDidMount(){
        fetch(this.URL)
            .then(res => res.json())
            .then(data => this.setState({users:data.results}))
            .catch(error => console.log('Wystapil błąd !'));
    }

    render() {
        const {users} = this.state; 
        return (
            <Fragment>
                {users.map( (user, index) => ( <User user={user} index={index} key={`user-${user.login.uuid}`} />) )}
            </Fragment>
        );
    }
}
// {users.map((user, index) => <User index={index} user={user} key={`user-${user.login.uuid}`}/>)}




 
export default Users;