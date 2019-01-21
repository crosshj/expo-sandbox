import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions, DrawerActions } from 'react-navigation';
import {
  Container, Text
} from 'native-base';


import UserName from '../userName';
import UserEmail from '../userEmail';
import UserPicture from '../userPicture';

import { Ionicons } from '@expo/vector-icons';

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
import AuthStateContainer from '../authStateContainer';

const getCustomDrawerContentComponent = ({ theme, screens = {} }) => {
  const visibleItems = Object.keys(screens)
    .filter(x => x !== 'Settings' && x !== 'Profile');
  const getVisible = item => visibleItems.includes(item.key);

  const styles = StyleSheet.create({
    container: {
      // marginTop: 56,
      flex: 1,
    },
    backgroundImage: {
      width: '100%',
      height: 170,
      backgroundColor: theme.toolbarDefaultBg
    },
    menuItem: {
      margin: 16,
      fontWeight: 'bold',
      color: theme.textColor,
    }
  });

  return ({items, ...other}) => {
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
              color={theme.toolbarBtnTextColor}
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

            <UserName inverse bold theme={theme}/>
            <UserEmail inverse small  theme={theme}/>

          </TouchableOpacity>
        </View>
        <ScrollView>
            <SafeAreaView style={styles.container}
              forceInset={{ top: 'always', horizontal: 'never' }}
            >
              <DrawerItems
                items={items.filter(getVisible)}
                {...other}
              />
            </SafeAreaView>
            <Subscribe to={[ AuthStateContainer ]}>
              {({state, logout}) => (
                <TouchableOpacity onPress={(event) => {
                  event.persist();
                  logout({ navigation });
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

};


module.exports = getCustomDrawerContentComponent;