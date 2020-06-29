import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.css';

const navItems = props => (
	<ul className={classes.navgroup}>
		<NavItem link='/' exact>Avatar</NavItem>
		<NavItem link='/fire'>Fire</NavItem>
		<NavItem link='/water'>Water</NavItem>
		<NavItem link='/air'>Air</NavItem>
		<NavItem link='/earth'>Earth</NavItem>
	</ul>
);

export default navItems;