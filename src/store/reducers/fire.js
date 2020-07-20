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
            power: addPower,
            totalFirePowers: 1,
        });
    }else{
        return state;
    }
        
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_FIREPWR: return addFirePwer(state, action);
        default: return state;
    }
}

export default reducer;