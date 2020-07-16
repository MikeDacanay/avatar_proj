import React, {useState} from 'react';

import Background from '../../hoc/Background/Background'
import Auxilary from '../../hoc/Auxilary/Auxilary';

import DiagramItems from '../../components/DiagramItems/DiagramItems';

const avatar = props => {	
	
	
	return (	 
		<Auxilary>
			<Background>
				<h1>THIS IS AVATAR</h1>
				<p>These are your power, your destiny!</p>
				<DiagramItems/>	
			</Background>
		</Auxilary>
	);
};

export default avatar;