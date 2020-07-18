import * as actionTypes from './actionTypes';

export const addAirPwr = pwr => {
    return {
        type: actionTypes.ADD_AIRPWR,
        power: pwr,
    }
}

export const removeAirPwr = pwr => {
    return {
        type: actionTypes.REMOVE_AIRPWR,
        power: pwr,
    }
}