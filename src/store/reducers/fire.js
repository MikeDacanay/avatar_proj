import {updateObject} from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    powers: [],
    totalFirePowers: 0,
}

const addFirePwer = (state, action) => {
    if(!state.powers.includes(action.power)){
        const addPower = [...state.powers];
        addPower.push(action.power);
        
        return updateObject(state, {
            powers: addPower,
            totalFirePowers: state.totalFirePowers+1,
        });
    }else{
        return state;
    }
        
}

const removeFirePwer = (state, action ) => {
    const index = state.powers.indexOf(action.power);

    const tempPowers = [...state.powers];

    tempPowers.splice(index,1);

    return updateObject(state,{
        powers: tempPowers,
        totalFirePowers: state.totalFirePowers-1,
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_FIREPWR: return addFirePwer(state, action);
        case actionTypes.REMOVE_FIREPWR: return removeFirePwer(state, action);
        default: return state;
    }
}

export default reducer;