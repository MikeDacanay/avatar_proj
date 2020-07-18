import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    powers: [],
    totalEarthPowers: 0,
}

//change powers below to addPower

const addEarthPwr = (state, action) => {
    return updateObject(state, {
        powers: initialState.powers,
        totalAirPowers: state.totalAirPowers+1,
    })
}

//TODO create removeEarthPwr

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EARTHPWR: return addEarthPwr;
        default: return state;    
    }
}

export default reducer;