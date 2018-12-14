import React from 'react';

import Navigator from './app/navigator';
import State from './app/state';

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
