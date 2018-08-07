import React from 'react';
//import { StyleSheet, /*Text, View*/ } from 'react-native';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';
import { createDrawerNavigator } from "react-navigation";

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

import HomeScreen from './app/components/home';
import SideBar from './app/components/sidebar';


const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default class App extends React.Component {
  state = {
    isReady: false,
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



  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
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


