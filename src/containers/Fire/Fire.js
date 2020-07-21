import React from 'react';
import {connect} from 'react-redux';
import Powers from '../../components/Powers/Powers';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';

const fire = props => {
	const powers = ['fire1','fire2', 'fire3', 'fire4'];

	return (
		<Auxilary>
			<h1>THIS IS FIRE</h1>
			<Powers
				pwrs={powers}
				currentPwrs={props.firePowers}
				pwrAdded={props.onFirePwrAdded}
			/>
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		firePowers: state.fire.powers,
	}
}

const mapStateToDispatch = dispatch => {
	return {
		onFirePwrAdded: powr => dispatch(actions.addFirePwr(powr)),
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(fire);