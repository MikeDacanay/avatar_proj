import React from 'react';
import {connect} from 'react-redux';
import Powers from '../../components/Powers/Powers';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';

const earth = props => {
	const powers = ['earth1','earth2','earth3','earth4']

	return (
		<Auxilary>
			<h1>THIS IS EARTH</h1>
			<Powers
				pwrs={powers}
				currentPwrs={props.earthPowers}
				pwrAdded={props.onEarthPwrAdded}
			/>				
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		earthPowers: state.earth.powers,
	}
}

const mapStateToDispatch = dispatch => {
	return {
		onEarthPwrAdded: powr => dispatch(actions.addEarthPwr(powr)),
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(earth);