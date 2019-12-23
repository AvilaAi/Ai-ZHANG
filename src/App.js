// Imports - Generals
import React from 'react';

// Imports - Styles & Themes & Elements

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { StylesProvider } from '@material-ui/styles';
import Theme from './Theme';

// Imports Components
import Navigation from './Component/Navigation';

const App = () => {
	return (
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={Theme}>
				<Navigation />
			</MuiThemeProvider>
		</StylesProvider>
	);
};

export default App;
