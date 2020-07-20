import React from 'react';
import {connect} from 'react-redux';
import Powers from '../../components/Powers/Powers';

import Auxilary from '../../hoc/Auxilary/Auxilary';

import * as actions from '../../store/actions/index';


const water = props => {
	const powers = ['water1', 'water2', 'water3', 'water4']; 

	return (
		<Auxilary>
			<h1>THIS IS Water</h1>
			<Powers
				pwrs={powers}
				pwrAdded={props.onWaterPwrAdded}
			/>
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		waterPowers: state.water.powers,
	}
}

const mapStateToDispatch = dispatch => {
	return{
		onWaterPwrAdded: powr => dispatch(actions.addWaterPwr(powr)),
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(water);