import React from 'react';

const User = (props) => {
    const {user, index} = props;
    return ( 
            <tr>
                <th scope="row"> {index+1} </th>
                <td>{user.name.first} {user.name.last}, </td>
                <td>{user.email}</td>
                {/* <img src={user.picture.medium} alt=""/> */}
            </tr>
    );
}
 
export default User;