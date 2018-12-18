import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Image, Icon, ImageBackground, View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions, DrawerActions } from 'react-navigation';
import { Container } from 'native-base';

import userIconMale from './icons/userIcon-male';
import { Ionicons } from '@expo/vector-icons';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xMzQDW3oAAAAMSURBVBhXY5DySwYAAVEAzItjNDcAAAAASUVORK5CYII=';
//#1a4e63 ^^^

import { Subscribe } from 'unstated';
import {
  AuthStateContainer,
  UserEmail, UserName, UserPicture
} from '../../base';

import theme from '../theme';

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

const visibleItems = ['Dashboard', 'Strategies'];
const getVisible = item => visibleItems.includes(item.key);

const CustomDrawerContentComponent = ({items, ...other}) => {
  const { navigation } = other;

  const LogoutButton = () => (
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
  );

  return (
    <Container>
      <ImageBackground style={styles.backgroundImage} source={{uri: base64Icon}}>
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
            size={32} color="white"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            marginRight: 45,
          }}
          onPress={(event) => profilePage({ event, navigation })}
        > */}
          {/* <Image style={{
            width: 75,
            height: 75,
            marginTop: 40,
            marginLeft: 10
          }} source={{uri: userIconMale()}}/>
          <Text style={{
            marginLeft: 15,
            fontWeight: 'bold',
            color: 'white'
          }}
          >Day Trader</Text>
          <Text style={{
            marginLeft: 15,
            color: 'white'
          }}
          >daytrader@bob.com</Text> */}
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
            <UserPicture theme={theme} />
          </View>

          <UserName inverse bold theme={theme} />
          <UserEmail inverse small theme={theme} />

        </TouchableOpacity>
      </ImageBackground>
      <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems
              items={items.filter(getVisible)}
              {...other}
            />
          </SafeAreaView>
          {/* <TouchableOpacity onPress={(event) => signOut({ event, navigation })}>
            <View>
              <Text style={styles.menuItem}>Logout</Text>
            </View>
          </TouchableOpacity> */}
          <LogoutButton />
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
    height: 180,
  },
  menuItem: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  }
});

module.exports = CustomDrawerContentComponent;