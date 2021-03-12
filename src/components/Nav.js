import React from 'react';

import './Nav.css';

import { Link } from "react-router-dom";


const Nav = ( {} ) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>  <Link to={"./"} > H-O-M-E </Link> </li>
                <li>  <Link to={"./userS"} > U-S-E-R-S </Link> </li>
                <li>  <Link to={"./contact"} > C-O-N-T-A-C-T </Link> </li>
            </ul>
        </nav>
     );
}
 
export default Nav;