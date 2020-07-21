import React from 'react';

import Power from './Power/Power';

import Auxilary from '../../hoc/Auxilary/Auxilary';

const powers = props => {

    const numOfPwrs = (
        props.pwrs.map((pwr,i) => (
            <Power
                power = {pwr}
                key = {i}
                currentPowers = {props.currentPwrs}
                powerAdded = {props.pwrAdded}
                powerRemoved = {props.pwrRemoved}
            />
        ))
    ); 

    return(
        <Auxilary>
            {numOfPwrs}
        </Auxilary>
    )
}

export default powers;