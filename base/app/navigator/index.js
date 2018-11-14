import React from 'react';

import {
  createDrawerNavigator, createSwitchNavigator, createStackNavigator
} from "react-navigation";

import Landscape from '../screens/landscape';
import Portrait from '../screens/portrait';

import Profile from '../screens/profile';
import Settings from '../screens/settings';

import SignIn from '../screens/signin';
import SignOut from '../screens/signout';
import Loading from '../screens/loading';

import SideBar from '../components/sidebar';

//const uri = 'https://start.duckduckgo.com/?kae=d&ko=-2';
const uri = 'https://home.crosshj.com';
import WebView from '../components/niceWebview';

const AppNavigator = createDrawerNavigator(
  {
    Landscape: { screen: Portrait(<WebView
      source={{uri}}
    />) },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
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
    initialRouteName: 'Loading',
  }
);

export default class Navigator extends React.Component {
  render() {
    return <SwitchNavigator />
  }
}
