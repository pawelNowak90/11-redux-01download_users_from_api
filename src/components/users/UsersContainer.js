import React, { Fragment } from 'react';

import Users from './Users';

const UsersContainer = () => {
    return ( 
        <Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name and Surname</th>
                        <th scope="col">email</th>
                        {/* <th scope="col">picture</th> */}
                    </tr>
                </thead>
                <tbody className="table-striped">
                <Users/>
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default UsersContainer;