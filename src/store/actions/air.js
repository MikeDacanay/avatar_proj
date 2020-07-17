import * as actionTypes from './actionTypes';

export const addAirPwr = pwr => {
    return {
        type: actionTypes.ADD_AIRPWR,
        power: pwr,
    }
}