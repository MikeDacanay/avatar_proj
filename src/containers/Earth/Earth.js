import React from 'react';
import {connect} from 'react-redux';
import Powers from '../../components/Powers/Powers';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';

//TODO create earth component
//TODO connect action and reducer to mapState

const earth = props => {
	return (
		<h1>THIS IS EARTH</h1>
	);
};

// const mapStateToProps = state => {
// 	return {
// 		airPowers: state.air.powers,
// 	}
// }

// const mapStateToDispatch = dispatch => {
// 	return {
// 		onAirPwrAdded: powr => dispatch(actions.addAirPwr(powr)),
// 	}
// }



export default earth;