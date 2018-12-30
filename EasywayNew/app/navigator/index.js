import React from 'react';

import {
  createDrawerNavigator, createSwitchNavigator, createStackNavigator
} from "react-navigation";

import Landscape from '../screens/landscape';
import Portrait from '../screens/portrait';


import Profile from '../screens/profile';
import Settings from '../screens/settings';

import Shopping from '../screens/Shopping';

import SignIn from '../screens/signin';
import SignOut from '../screens/signout';
import Loading from '../screens/loading';

import SideBar from '../components/sidebar';

//import Auth0 from '../screens/auth0';

//import { html, script } from '../components/iframeWrapper';

//const uri = 'https://start.duckduckgo.com/?kae=d&ko=-2';
const uri = 'https://home.crosshj.com';
// const uri = 'https://test.letbob.com/chartiq/chart.html#AAPL';
//const uri = 'http://192.168.1.95:3000/mobileChart/';

//const html = iframeWrapper();

import WebView from '../components/niceWebview';

//console.log(html);

const AppNavigator = createDrawerNavigator(
  {
    // Landscape: { screen: Portrait(<WebView
    //   source={{uri}}
    //   onMessage={(event)=> console.log(event.nativeEvent.data)}
    // />) },
    Profile: { screen: Profile },
    Shopping: { screen: Shopping },
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
  { headerMode: 'none', initialRouteName: 'SignIn' }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthNavigator,
    AppNavigator,
  },
  {
    initialRouteName: 'Loading',
    //initialRouteName: 'AppNavigator',
  }
  );

export default class Navigator extends React.Component {
  render() {
    return <SwitchNavigator />;
  }
}
