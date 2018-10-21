import React from 'react';
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";

import Landscape from './app/screens/landscape';
import Portrait from './app/screens/portrait';

import SignIn from './app/screens/signin';
import SignOut from './app/screens/signout';
import Loading from './app/screens/loading';

import SideBar from './app/components/sidebar';

const uri = 'https://start.duckduckgo.com/?kae=d&ko=-2';
import WebView from './app/components/niceWebview';

const AppNavigator = createDrawerNavigator(
  {
    Landscape: { screen: Portrait(<WebView
      source={{uri}}
    />) },
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

const AuthNavigator = createStackNavigator(
  { SignIn, SignOut },
  { headerMode: 'none' }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AppNavigator,
    AuthNavigator,
  },
  {
    initialRouteName: 'AppNavigator',
  }
);

export default class App extends React.Component {
  state = {
    isReady: true,
    isLoggedIn: true,
    modalVisible: false,
  };

  render() {
    return <SwitchNavigator />
  }
}
