import React from 'react';

import DiagramItem from './DiagramItem/DiagramItem';

import classes from './DiagramItems.module.css';

const diagramItems = props => {

	const retrieveDiagramItem = pwrs => (		
		pwrs.length ? <DiagramItem ele={pwrs}/> : null 
	)

	let diagramItem = [
		retrieveDiagramItem(props.firepwrs),
		retrieveDiagramItem(props.airpwrs),
		retrieveDiagramItem(props.earthpwrs),
		retrieveDiagramItem(props.waterpwrs),
	];

	return (
		<div className={classes.diagramItems}>
			{diagramItem}
		</div>
	);
};

export default diagramItems;