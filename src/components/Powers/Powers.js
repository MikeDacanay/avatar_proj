import React from 'react';

import Power from './Power/Power';

import Auxilary from '../../hoc/Auxilary/Auxilary';

const powers = props => {

    console.log(props.pwrs);

    const numOfPwrs = (
        props.pwrs.map((pwr,i) => (
            <Power
                power = {pwr}
                key = {i}
                powerAdded = {props.pwrAdded}
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