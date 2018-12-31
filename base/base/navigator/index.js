import React from 'react';

import {
  createDrawerNavigator, createSwitchNavigator, createStackNavigator
} from "react-navigation";

import SignIn from '../signin';
import SignOut from '../signout';

import SideBar from './sidebar';

const getNavigator = ({screens, options, Loading}, Theme) => {

  // TODO: activeTintColor should come from Theme

  const baseOpts =   {
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
  };

  const AppNavigator = createDrawerNavigator(
    screens,
    { ...baseOpts, ...options }
  );

  const AuthNavigator = createStackNavigator({
    SignIn: SignIn(Theme, Logo, appJson),
    SignOut: SignOut(Theme, Logo, appJson)
  }, {
    headerMode: 'none',
    initialRouteName: 'SignIn'
  });

  const SwitchNavigator = createSwitchNavigator({
    Loading,
    AuthNavigator,
    AppNavigator,
  }, {
    initialRouteName: 'Loading',
    //initialRouteName: 'AppNavigator',
  });

  return <SwitchNavigator />;
};

export default getNavigator;
