import React from 'react';
import Expo, { Asset, AppLoading } from 'expo';
import { createDrawerNavigator } from "react-navigation";

import Home from './app/screens/home';
import Profile from './app/screens/profile';
import Settings from './app/screens/settings';
import SignOut from './app/screens/signout';

import SideBar from './app/components/sidebar';

const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

const HomeScreenRouter = createDrawerNavigator(
  {
    Recipts: { screen: Home },
    Vendors: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
    SignOut: { screen: SignOut },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default class App extends React.Component {
  state = {
    isReady: false,
    isLoggedIn: false,
    modalVisible: false,
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await this._cacheResourcesAsync();
    this.setState({ isReady: true });
  }

  loginHandler({username, password, createAccount}) {
    //TODO: if createAccount, open account creation page
    this.setState({
      isLoggedIn: true
    });
  }

render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    }

    if (!this.state.isLoggedIn) {
      return (
        <Login {...{
          handler: this.loginHandler.bind(this)
        }} />
      );
    }
    return <HomeScreenRouter />
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/icon.png'),
      require('./assets/splash.png'),
      require('./assets/appDefault.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all([ delay(false, 100), ...cacheImages ])
  }
}
