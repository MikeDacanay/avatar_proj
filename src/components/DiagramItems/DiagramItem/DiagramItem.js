import React from 'react';

import classes from './DiagramItem.module.css';

const diagramItem = props => {
	return (
		<div className={classes.diagramItem}>
			{props.ele}
		</div>
	);
};

export default diagramItem;