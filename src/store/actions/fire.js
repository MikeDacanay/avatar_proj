import * as actionTypes from './actionTypes';

export const addFirePwr = pwr => {
    return {
        type: actionTypes.ADD_FIREPWR,
        power: pwr,
    }
}

export const removeFirePwr = pwr => {
    return {
        type: actionTypes.REMOVE_FIREPWR,
        power: pwr,
    }
}