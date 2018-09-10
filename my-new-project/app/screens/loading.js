import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Asset, AppLoading, Permissions, Notifications } from 'expo';

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
    const userToken = await AsyncStorage.getItem('userToken');

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    await this._cacheResourcesAsync();

    const pushToken = await this._registerPushNotifications();
    await AsyncStorage.setItem('pushToken', pushToken);

    this.props.navigation.navigate(
        userToken ? 'AppNavigator' : 'AuthNavigator'
        //'AppNavigator'
    );
  };

  async _registerPushNotifications() {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    return token;
  }

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
