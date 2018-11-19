import React from 'react';

import {
  createDrawerNavigator, createSwitchNavigator, createStackNavigator
} from "react-navigation";

import Landscape from '../screens/landscape';
import Portrait from '../screens/portrait';

import Dashboard from '../screens/dashboard';
import Strategies from '../screens/strategies';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import SignIn from '../screens/signin';
import SignOut from '../screens/signout';
import Loading from '../screens/loading';

import SideBar from '../components/sidebar';

//import { html, script } from '../components/iframeWrapper';

// const uri = 'https://test.letbob.com/chartiq/chart.html#AAPL';
const uri = 'http://192.168.1.95:3000/mobileChart/';

import WebView from '../components/niceWebview';

//console.log(html);

const AppNavigator = createDrawerNavigator(
  {
    Strategies,
    Dashboard,
    Landscape: { screen: Landscape(<WebView
      source={{uri}}
      onMessage={(event)=> console.log(event.nativeEvent.data)}
    />) },
    Portrait: { screen: Landscape(<WebView
      source={{uri}}
      onMessage={(event)=> console.log(event.nativeEvent.data)}
    />) },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    contentOptions: {
      activeTintColor: '#1a4e63',
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
