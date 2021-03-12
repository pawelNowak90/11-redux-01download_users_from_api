import React from 'react';

import './Btn.css';

const Btn = ( {name, classes} ) => {
    return (
        <button type="button" className={`btn ${classes}`} >
            {name}
        </button>
     );
}
 
export default Btn;