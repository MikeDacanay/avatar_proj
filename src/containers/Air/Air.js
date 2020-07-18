import React from 'react';
import {connect} from 'react-redux';
import Powers from '../../components/Powers/Powers';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';

const air = props => {
	const powers = ['air1','air2','air3','air4'];

	return (
		<Auxilary>
			<h1>THIS Is air</h1>
			<Powers
				pwrs={powers}
				pwrAdded={props.onAirPwrAdded}
			/>
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