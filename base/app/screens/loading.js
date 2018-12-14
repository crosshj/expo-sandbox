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
import { variables } from '../components/styleWrapper';

import global from '../state/globalStateContainer';

const delay = (shouldReject, timeout = 2000) =>
	new Promise((res, rej) =>
		setTimeout(shouldReject ? rej : res, timeout));

class LoadingScreen extends React.Component {
	state = {
		token: undefined
	};

	constructor(props) {
		super(props);
		SplashScreen.hide();
	}

	componentDidMount() {
		this._cacheResourcesAsync() // ask for resources
			.then(this._navigateAway) // mark reasources as loaded
			.catch(this._catchError);
	}

	_cacheResourcesAsync = async () => {
		console.log('--- _cacheResourcesAsync');
		const images = [
			//require('../../assets/icon.png'),
			//require('../../assets/splash.png'),
			//require('../../assets/appDefault.png'),
		];

		if (images.length) {
			const cacheImages = images.map((image) => {
				return Asset.fromModule(image).downloadAsync();
			});
			await Promise.all([delay(false, 100), ...cacheImages]);
		}

		await registerPush();

		await global._init();

		this.setState({ token: global.state.token });
	}

	_navigateAway = async () => {
		//const userToken = await AsyncStorage.getItem('userToken');
		const userToken = this.state.token;
		console.log({ userToken });

		const navTo = userToken ? 'AppNavigator' : 'AuthNavigator';
		//const navTo = 'AppNavigator';
		console.log(`--- will navigate away from loading to ${navTo}!!`);
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
			<Container style={styles.container}>
				<Content style={styles.content}>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Loader
							size={80}
							color={variables.textColor}
						// betweenSpace={5}
						// rotationSpeed={1600}
						// strokeWidth={1}
						/>
					</View>
					<Text
						style={{
							fontSize: 30,
							color: variables.textColor,
							width: '100%',
							textAlign: 'center',
							//fontStyle: 'italic',
							marginBottom: 10
						}}
					>{appJson.expo.name}</Text>
				</Content>
				{/* <Logo
            onLoadEnd={() => {
              console.log('Image#onLoadEnd: hiding SplashScreen');
              SplashScreen.hide();
              this._cacheResourcesAsync();
            }}
        /> */}
			</Container>
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
