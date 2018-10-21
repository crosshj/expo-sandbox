import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Image, Icon, ImageBackground, View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions, DrawerActions } from 'react-navigation';
import { Container } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAaSURBVChTY0jfaUY8GlWNiUZVYyLaqd5pBgBbpCym1BWunwAAAABJRU5ErkJggg==';

async function signOut({ event, navigation }){
  event.persist();
  navigation.navigate('AuthNavigator', {}, NavigationActions.navigate({ routeName: 'SignOut' }));
}

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

const visibleItems = ['Receipts', 'Vendors'];
const getVisible = item => visibleItems.includes(item.key);

const CustomDrawerContentComponent = ({items, ...other}) => {
  const { navigation } = other;
  //console.log({props});
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
        <TouchableOpacity
          style={{
            marginRight: 45,
          }}
          onPress={(event) => profilePage({ event, navigation })}
        >
          <Text style={{
            marginLeft: 15,
            fontWeight: 'bold',
            color: 'white'
          }}
          >Johnathan Doe</Text>
          <Text style={{
            marginLeft: 15,
            color: 'white'
          }}
          >johnathandoe33@ledjr.com</Text>
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems
              items={items.filter(getVisible)}
              {...other}
            />
          </SafeAreaView>
          <TouchableOpacity onPress={(event) => signOut({ event, navigation })}>
            <View>
              <Text style={styles.menuItem}>Logout</Text>
            </View>
          </TouchableOpacity>
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
    width: '100%', height: 165
  },
  menuItem: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  }
});

module.exports = CustomDrawerContentComponent;