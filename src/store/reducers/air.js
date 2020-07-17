import * as actionTypes from '../actions/actionTypes';

const initialState = {
    powers: [],
    totalAirPowers: 0,
}

const addAirPwer = (state, action) => {
    // TODO create utility function to share on all

    
    if(!state.powers.includes(action.power)){
        // console

        const addPower = [...state.powers];         
        addPower.push(action.power);

    
        return {
            ...state,
            powers: addPower,
            totalAirPowers: state.totalAirPowers+1,
        }
    }else{
        return state;
    }
}

const reducer = (state = initialState, action) => {    
    switch(action.type){
        case actionTypes.ADD_AIRPWR: return addAirPwer(state, action);
        default: return state;
    }    
}

export default reducer;