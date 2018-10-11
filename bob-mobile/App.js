import React from 'react';
import Expo, { Asset, AppLoading } from 'expo';
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";

import Receipts from './app/screens/receipts';
import Vendors from './app/screens/vendors';
import Profile from './app/screens/profile';
import Settings from './app/screens/settings';
import SignIn from './app/screens/signin';
import SignOut from './app/screens/signout';
import Loading from './app/screens/loading';

import SideBar from './app/components/sidebar';

const AppNavigator = createDrawerNavigator(
  {
    Receipts: { screen: Receipts },
    Vendors: { screen: Vendors },
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

export default class App extends React.Component {
  state = {
    isReady: false,
    isLoggedIn: true,
    modalVisible: false,
  };

  render() {
    return <SwitchNavigator />
  }
}
