import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    powers: [],
    totalWaterPowers: 0,
}

const addWaterPwer = (state, action) => {
    if(!state.powers.includes(action.power)){
        const addPower = [...state.powers];
        addPower.push(action.power);
        
        return updateObject(state, {
            powers: addPower,
            totalWaterPowers: state.totalWaterPowers+1,
        });
    }else{
        return state;
    }   
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_WATERPWR: return addWaterPwer(state, action);
        default: return state;
    }
}

export default reducer;