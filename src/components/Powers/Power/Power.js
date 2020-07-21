import React, { useEffect, useState } from 'react';

import classes from './Power.module.css';

const Power = props => {
    const [powerUp, setpowerUp] = useState(false);

    useEffect(() => {
        if(props.currentPowers.includes(props.power)){
           setpowerUp(props.power);  
        }
    },[props.currentPowers,props.power])

    const togglePwr = () => {
        if(powerUp === props.power){
            setpowerUp(false);
            //TODO create props.powerRemoved            
        }else{
            setpowerUp(props.power);
            props.powerAdded(props.power);
        }        
    }

    return (
        <div 
            className={powerUp ? `${classes.Power} ${classes.active}`: `${classes.Power}`}
            onClick={togglePwr}>        
            {props.power}
        </div>  
    )
}

export default Power;