import React from 'react';
import {connect} from 'react-redux';
import Background from '../../hoc/Background/Background'
import Auxilary from '../../hoc/Auxilary/Auxilary';

import DiagramItems from '../../components/DiagramItems/DiagramItems';

const avatar = props => {	
	
	
	return (	 
		<Auxilary>
			<Background>
				<h1>THIS IS AVATAR</h1>
				<p>These are your power, your destiny!</p>
				<DiagramItems
					firepwrs = {props.firePowers}
					airpwrs = {props.airPowers}
					waterpwrs = {props.waterPowers}
					earthpwrs = {props.earthPowers}
				/>
			</Background>
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		firePowers: state.fire.powers,
		waterPowers: state.water.powers,
		airPowers: state.air.powers,
		earthPowers: state.earth.powers,
	}
}


export default connect(mapStateToProps, null)(avatar);