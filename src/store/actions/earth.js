import * as actionTypes from './actionTypes';

export const addEarthPwr = pwr => {
    return {
        type: actionTypes.ADD_EARTHPWR,
        power: pwr,
    }
}

export const removeEarthPwr = pwr => {
    return {
        type: actionTypes.REMOVE_EARTHPWR,
        power: pwr,
    }
}