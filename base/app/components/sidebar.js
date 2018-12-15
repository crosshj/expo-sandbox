import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions, DrawerActions } from 'react-navigation';
import {
  Container, Text
} from 'native-base';


import UserName from './userName';
import UserEmail from './userEmail';
import UserPicture from './userPicture';

import userIconMale from './icons/userIcon-male';
import { Ionicons } from '@expo/vector-icons';

import { variables } from './styleWrapper';


// async function signOut({ event, navigation }){
//   event.persist();
//   navigation.navigate('AuthNavigator', {}, NavigationActions.navigate({ routeName: 'SignOut' }));
// }

async function settingsPage({ event, navigation }){
  event.persist();
  navigation.navigate('Settings');
  navigation.dispatch(DrawerActions.closeDrawer());
}

async function profilePage({ event, navigation }){
  event.persist();
  navigation.navigate('Profile');
  navigation.dispatch(DrawerActions.closeDrawer());
}



import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';

const visibleItems = ['Portrait', 'Landscape'];
const getVisible = item => visibleItems.includes(item.key);

const CustomDrawerContentComponent = ({items, ...other}) => {
  const { navigation } = other;
  //console.log({props});
  return (
    <Container>
      <View style={styles.backgroundImage}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 15,
            top: 35
          }}
          onPress={(event) => settingsPage({ event, navigation })}
        >
          <Ionicons
            name="md-settings"
            size={32}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginRight: 45,
            marginLeft: 15,
            marginTop: 40
          }}
          onPress={(event) => profilePage({ event, navigation })}
        >
          <View style={{
            marginTop: 10,
            marginBottom: 10,
          }}>
            <UserPicture />
          </View>

          <UserName inverse bold />
          <UserEmail inverse small />

        </TouchableOpacity>
      </View>
      <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems
              items={items.filter(getVisible)}
              {...other}
            />
          </SafeAreaView>
          <Subscribe to={[ GlobalStateContainer ]}>
						{({state, _logoutAuth0}) => (
							<TouchableOpacity onPress={(event) => {
								event.persist();
								_logoutAuth0({ navigation });
								//signOut({ event, navigation })
							}}>
								<View>
									<Text style={styles.menuItem}>Logout</Text>
								</View>
							</TouchableOpacity>
						)}
					</Subscribe>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 56,
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 170,
    backgroundColor: variables.toolbarDefaultBg
  },
  menuItem: {
    margin: 16,
    fontWeight: 'bold',
    //color: 'rgba(0, 0, 0, .87)',
  }
});

module.exports = CustomDrawerContentComponent;