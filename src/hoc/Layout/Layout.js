import React from 'react';
import Auxilary from '../Auxilary/Auxilary';
import classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

const layout = props => {
	return (
		<Auxilary>	
			<Navbar/>
			<main>			
				{props.children}
			</main>
		</Auxilary>
	)
}

export default layout;
