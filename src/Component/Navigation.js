import React from 'react';
// Routers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import Aboutme from './Aboutme';
import Competences from './Competences';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Divers from './Divers';
import Contact from './Contact';
import Cover from './Cover';
import Formations from './Formations';

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Cover} />
				<Route exact path='/aboutme' component={Aboutme} />
				<Route exact path='/competences' component={Competences} />
				<Route exact path='/experiences' component={Experiences} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/divers' component={Divers} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/formations' component={Formations} />
			</Switch>
		</Router>
	);
};

export default Navigation;
