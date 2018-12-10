import React from 'react';
// import {
//   ActivityIndicator,
//   AsyncStorage,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
import { Asset, AppLoading, Permissions, Notifications } from 'expo';

import { registerPush } from '../services/notifications'

const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  async _bootstrapAsync() {
    //const userToken = await AsyncStorage.getItem('userToken');
    const userToken = false;

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    await this._cacheResourcesAsync();
    await registerPush();

    const navTo = userToken ? 'AppNavigator' : 'AuthNavigator';
    //const navTo = 'AppNavigator';
    console.log(`--- will navigate away from loading to ${navTo}!!`);
    this.props.navigation.navigate(navTo);
  };

  async _cacheResourcesAsync() {
    const images = [
      require('../../assets/icon.png'),
      require('../../assets/splash.png'),
      require('../../assets/appDefault.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all([ delay(false, 100), ...cacheImages ])
  }

  // Render any loading content that you like here
  render() {
    return (
      <AppLoading autoHideSplash={false} />
    );
  }
}

export default LoadingScreen;
