import React from 'react';
import {connect} from 'react-redux';
import Power from '../../components/Power/Power';

import Auxilary from '../../hoc/Auxilary/Auxilary';

const air = props => {

	console.log(props.airPowers);

	return (
		<Auxilary>
			<h1>THIS Is air</h1>
			<Power>Power Air 1</Power>	
			<Power>Power Air 2</Power>	
			<Power>Power Air 3</Power>
			<Power>Power Air 4</Power>	
		</Auxilary>
	);
};

const mapStateToProps = state => {
	return {
		airPowers: state.air.powers,
	}
}

export default connect(mapStateToProps, null)(air);