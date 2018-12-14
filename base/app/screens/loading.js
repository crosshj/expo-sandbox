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

import { Asset, AppLoading, SplashScreen, Permissions, Notifications } from 'expo';

import Logo from '../components/logo';

import { registerPush } from '../services/notifications'

import appJson from '../../app.json';
import { variables } from '../components/styleWrapper';

import globalState from '../state/globalStateContainer';

const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

class LoadingScreen extends React.Component {
  state = {
    splashReady: false,
    appReady: false
  };

  constructor(props) {
    console.log({ color: appJson.expo.splash.backgroundColor });
    super(props);
    SplashScreen.hide();
  }

  componentDidMount() {
    this._cacheResourcesAsync() // ask for resources
      .then(() => this._navigateAway()) // mark reasources as loaded
      .catch(error => console.error(`Unexpected error thrown when loading:
${error.stack}`));
  }

  // _cacheSplashAsync = async () => {
  //   console.log('--- _cacheSplashAsync');
  //   const images = [
  //     require('../../assets/splash.png'),
  //     //require('../../assets/boo.gif'),
  //   ];
  //   const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
  //   return Promise.all(cacheImages)
  // }


  _cacheResourcesAsync = async () => {
    console.log('--- _cacheResourcesAsync');
    const images = [
      //require('../../assets/icon.png'),
      //require('../../assets/splash.png'),
      //require('../../assets/appDefault.png'),
    ];


    if(images.length){
      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });
      await Promise.all([ delay(false, 100), ...cacheImages ]);
    }

		await registerPush();
		const global = globalState;
		await global._init();

    this.setState({ appReady: true, token: global.state.token });
    //this._navigateAway();
  }

  _navigateAway = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');
		const userToken = this.state.token;
		console.log({userToken});

    const navTo = userToken ? 'AppNavigator' : 'AuthNavigator';
    //const navTo = 'AppNavigator';
    console.log(`--- will navigate away from loading to ${navTo}!!`);
    this.props.navigation.navigate(navTo);
  }

  // Render any loading content that you like here
  render() {
    // console.log({
    //   splashReady: this.state.splashReady,
    //   appReady: this.state.appReady,
    // });

    // if(!this.state.splashReady){
    //   return (
    //     <AppLoading
    //       //startAsync={this._cacheSplashAsync}
    //       //onFinish={() => this.setState({ splashReady: true })}
    //       //onError={console.warn}
    //       autoHideSplash={false}
    //     />
    //   );
    // }

    // if(!this.state.appReady){
    //   return null;
    // }

    return (
      <Container style={styles.container}>
				<Content style={styles.content}>
					<View
						style={{
							flex:1,
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
        {/* <Content style={styles.content}>
          <Text
              style={{
                  fontSize: 30,
                  color: '#999',
                  width: '100%',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  marginBottom: 30
              }}
          >Hello</Text>
				<RippleLoader
						size={80}
						color='white'
						betweenSpace={5}
						rotationSpeed={1600}
						strokeWidth={3}
				/>
        </Content> */}
      </Container>
    );

    // return (
    //   <View style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100%',
    //   }}>
    //       <Image
    //         style={{
    //           resizeMode: 'contain',
    //           width: undefined,
    //           height: undefined,
    //         }}
    //         source={require('../../assets/splash.png')}
    //         onLoadEnd={() => {
    //           console.log('Image#onLoadEnd: hiding SplashScreen');
    //           SplashScreen.hide();
    //           this._cacheResourcesAsync();
    //         }}
    //         fadeDuration={0}
    //       />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
		display: 'flex',
		flex: 1,
    //marginTop: 'auto',
    backgroundColor: appJson.expo.splash.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    //height: '100%',
    //width: '100%'
  },
  content: {
    //flex: 1,
    //height: '100%',
		//width: '100%'
		//minWidth: '80%',
		//marginBottom: 0,
		//textAlign: 'center',
		marginTop: '50%',
		//marginBottom: '50%'
  },
});

export default LoadingScreen;
