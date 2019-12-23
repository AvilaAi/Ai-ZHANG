import React from 'react';
import { Container as MyContainer, Grid, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	main: {
		padding: '50px',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
	},
}));

const Container = props => {
	const { children } = props;
	const classes = useStyles(props);

	const tabs = [
		{ link: '/aboutme', label: 'ABOUT ME' },
		{ link: '/competences', label: 'COMPETENCES' },
		{ link: '/experiences', label: 'EXPERIENCES' },
		{ link: '/portfolio', label: 'PORTFOLIO' },
		{ link: '/formations', label: 'FORMATIONS' },
		{ link: '/divers', label: 'DIVERS' },
		{ link: '/contact', label: 'CONTACT' },
	];
	return (
		<MyContainer className='page' maxWidth='xl'>
			<Grid container direction='row' justify='space-between' alignItems='center' className='navbar'>
				<Grid container xs={11} direction='row' justify='space-around' alignItems='center'>
					{tabs.map(tab => {
						const name = tab.label.toLowerCase().replace(/\s+/g, '');
						const target = window.location
							.toString()
							.toLowerCase()
							.search(name);
						return (
							<Link to={tab.link}>
								<Button className={target === -1 ? name : `${name} target`}>{tab.label}</Button>
							</Link>
						);
					})}
				</Grid>
				<Button>🇫🇷Langue 🇫🇷</Button>
			</Grid>
			<Grid container className={classes.main}>
				{' '}
				{children}
			</Grid>
		</MyContainer>
	);
};

export default Container;
