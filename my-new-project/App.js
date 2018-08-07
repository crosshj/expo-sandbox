import React from 'react';
//import { StyleSheet, /*Text, View*/ } from 'react-native';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

import Popup from './app/components/popup';
import ListView from './app/components/listview';
import Header from './app/components/header';
import Login from './app/components/login';

const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

const vendorNames = [
  'McDonalds', 'Burger King', 'Wendys', 'BP', 'Shell', 'Walmart', 'Target',
  'Kroger', 'Publix', 'Tin Drum', 'Chipotle', '5 Guys', 'Radio Shack', 'Frys Electronics'
];

export default class App extends React.Component {
  state = {
    isReady: false,
    isLoggedIn: false,
    modalVisible: false,
    selectedItem: undefined,
    items: (() => vendorNames
      .map((x, i) => ({
        name: x,
        full_name: 'Foo Bar',
        score: i+1
      }))
    )()
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await this._cacheResourcesAsync();
    this.setState({ isReady: true });
  }

  setModalVisible(visible, x) {
    this.setState({
        modalVisible: visible,
        selectedItem: x
    });
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
    return (
      <Container style={styles.container}>
        <Header />
        <ListView
          items={this.state.items}
          setModalVisible = {this.setModalVisible.bind(this)}
          popup={() =>
            <Popup {...{
              modalVisible: this.state.modalVisible,
              selectedItem: this.state.selectedItem,
              setModalVisible: this.setModalVisible.bind(this)
            }} />
          }
        />
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button full>
              <Text style={styles.footerText}>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ...Platform.select({
    //     android: {
    //         marginTop: StatusBar.currentHeight
    //     }
    // })
  },
  footer: {
    backgroundColor: '#eee'
  },
  footerText: {
    color: "#333"
  },
  modalImage: {
    resizeMode: 'contain',
    height: 200
  },
  bold: {
      fontWeight: '600'
  },
  negativeMargin: {
      marginBottom: -10
  }
});
