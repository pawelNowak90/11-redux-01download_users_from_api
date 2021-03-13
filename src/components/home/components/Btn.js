import React from 'react';

import './Btn.css';

const Btn = ( {name, classes, handle} ) => {
    return (
        <button onClick={handle} type="button" className={`btn ${classes}`} >
            {name}
        </button>
     );
}
 
export default Btn;