import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    powers: [],
    totalAirPowers: 0,
}

const addAirPwer = (state, action) => { 
    if(!state.powers.includes(action.power)){
        const addPower = [...state.powers];         
        addPower.push(action.power);
    
        return updateObject(state, {
            powers: addPower,
            totalAirPowers: state.totalAirPowers+1,
        })
  
    }else{
        return state;
    }
}

const removeAirPwer = (state, action ) => {
    const index = state.powers.indexOf(action.power);

    const tempPowers = [...state.powers];

    tempPowers.splice(index,1);

    return updateObject(state,{
        powers: tempPowers,
        totalAirPowers: state.totalAirPowers-1,
    });
}

const reducer = (state = initialState, action) => {    
    switch(action.type){
        case actionTypes.ADD_AIRPWR: return addAirPwer(state, action);
        case actionTypes.REMOVE_AIRPWR: return removeAirPwer(state, action);
        default: return state;
    }    
}

export default reducer;