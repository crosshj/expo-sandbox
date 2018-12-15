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
