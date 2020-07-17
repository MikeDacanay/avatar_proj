import React from 'react';

import classes from './Power.module.css';

const power = props => {
    return (
        <div 
            className={classes.power}
            onClick={() => props.pwrAdded(props.children)}>
            {props.children}
        </div>  
    )
}

export default power;