import React from 'react';

import Navigator from './navigator';
import State from './state';

import { SplashScreen } from 'expo';

export default class App extends React.Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<State>
				<Navigator />
			</State>
		);
	}
}

/*

    For this to truly function as a base project, need following passed to this module

    navigator
    theme
    state

    more? maybe?
    components
    screens
    services



*/