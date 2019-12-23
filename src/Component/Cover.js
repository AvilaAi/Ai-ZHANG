import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
// Imports - Router
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.midnight,
		height: '100vh',
	},
}));
const Cover = props => {
	const classes = useStyles(props);

	return (
		<div className={classes.root}>
			<div></div>

			<Link to='./aboutme'>
				<Button color='secondary'>LOPKO</Button>
			</Link>
		</div>
	);
};

export default Cover;
