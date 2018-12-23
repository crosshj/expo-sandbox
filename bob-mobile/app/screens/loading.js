import React from 'react';
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	StyleSheet,
	Text,
	Image,
	View,
} from 'react-native';

import {
	Container, Content
} from 'native-base';

/*
PulseLoader, DotsLoader, TextLoader, BubblesLoader, CirclesLoader,
RippleLoader, BreathingLoader, LinesLoader, MusicBarLoader, EatBeanLoader,
DoubleCircleLoader, RotationCircleLoader, RotationHoleLoader,
CirclesRotationScaleLoader, NineCubesLoader, LineDotsLoader,
ColorDotsLoader
*/
import { RotationHoleLoader as Loader } from 'react-native-indicator';

import { Asset, SplashScreen, Permissions, Notifications } from 'expo';

import Logo from '../components/logo';

import { registerPush } from '../services/notifications'

import appJson from '../../app.json';

import { AuthStateContainer } from '../../base/index';

const delay = (shouldReject, timeout = 2000) =>
	new Promise((res, rej) =>
		setTimeout(shouldReject ? rej : res, timeout));

class LoadingScreen extends React.Component {
	state = {
		token: undefined
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this._cacheResourcesAsync() // ask for resources
			.then(this._navigateAway) // mark reasources as loaded
			.catch(this._catchError);
	}

	_cacheResourcesAsync = async () => {
		//console.log('--- _cacheResourcesAsync');
		const images = [
			//require('../../assets/icon.png'),
			require('../../assets/splash.png'),
			require('../../assets/logo.png'),
		];

		if (images.length) {
			const cacheImages = images.map((image) => {
				return Asset.fromModule(image).downloadAsync();
			});
			await Promise.all([delay(false, 100), ...cacheImages]);
		}

		// no await?
		// or only do this on request
		// registerPush();

		// const clientId = 'Jmk1cLExXAy9PRe9dztRP4WfmEc43MRv'; //it's okay to share this publicly
		// const domain = 'https://crosshj.auth0.com';

		const clientId = 'ofS6Hw0H0NH3sSPnk9GfKMVdXPLRmxI4'; //it's okay to share this publicly
		const domain = 'https://daytradingbob.auth0.com';

		await AuthStateContainer.init({
			clientId, domain
		});

		//console.log({ authState: AuthStateContainer.state })

		this.setState({ token: AuthStateContainer.state.token });
	}

	_navigateAway = async () => {
		const userToken = this.state.token;
		//console.log({ userToken });

		const navTo = userToken ? 'AppNavigator' : 'AuthNavigator';
		//console.log(`--- will navigate away from loading to ${navTo}!!`);
		this.props.navigation.navigate(navTo);
	}

	_catchError = (error) => {
		console.error(
			`Unexpected error thrown when loading:
			${error.stack}
			`.replace(/\t/g, '')
		);
	}

	render() {
		return (
			<Container style={styles.container}></Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: appJson.expo.splash.backgroundColor,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		marginTop: '50%',
	},
});

export default LoadingScreen;

