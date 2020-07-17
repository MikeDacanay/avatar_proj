import React from 'react';
import {connect} from 'react-redux';
import Power from '../../components/Power/Power';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';

const air = props => {
	//TODO create parent component Powers to hold all power
	return (
		<Auxilary>
			<h1>THIS Is air</h1>
			<Power pwrAdded={props.onAirPwrAdded}>Power Air 1</Power>	
			<Power pwrAdded={props.onAirPwrAdded}>Power Air 2</Power>	
			<Power pwrAdded={props.onAirPwrAdded}>Power Air 3</Power>
			<Power pwrAdded={props.onAirPwrAdded}>Power Air 4</Power>	
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		airPowers: state.air.powers,
	}
}

const mapStateToDispatch = dispatch => {
	return {
		onAirPwrAdded: powr => dispatch(actions.addAirPwr(powr)),
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(air);