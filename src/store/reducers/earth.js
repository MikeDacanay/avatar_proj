import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    powers: [],
    totalEarthPowers: 0,
}

const addEarthPwr = (state, action) => {

    if(!state.powers.includes(action.power)){
        const addPower = [...state.powers];
        addPower.push(action.power);

        return updateObject(state, {
            powers: addPower,
            totalEarthPowers: state.totalEarthPowers+1,
        })
    }else{
        return state;
    }    
}

//TODO create removeEarthPwr

const reducer = (state = initialState, action) => {    
    switch(action.type){
        case actionTypes.ADD_EARTHPWR: return addEarthPwr(state, action);
        default: return state;
    }    
}

export default reducer;