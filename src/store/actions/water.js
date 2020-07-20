import * as actionTypes from './actionTypes';

export const addWaterPwr = pwr => {
    return {
        type: actionTypes.ADD_WATERPWR,
        power: pwr, 
    }
}

export const removeWaterPwr = pwr => {
    return {
        type: actionTypes.ADD_WATERPWR,
        power: pwr, 
    }
}