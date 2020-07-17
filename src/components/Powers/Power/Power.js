import React from 'react';

import classes from './Power.module.css';

const power = props => {
    return (
        <div 
            className={classes.power}
            onClick={() => props.powerAdded(props.power)}>            
            {props.power}
        </div>  
    )
}

export default power;