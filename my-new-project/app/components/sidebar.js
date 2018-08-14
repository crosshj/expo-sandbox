// import React from "react";
// import {
//     StyleSheet, AppRegistry, Image, StatusBar
// } from "react-native";
// import {
//     Container, Content, Text, List, ListItem
// } from "native-base";

// const routes = ["Home", "Chat", "Profile"];
// export default class SideBar extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Content>
//           {/* <Image
//             source={{
//               uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
//             }}
//             style={{
//               height: 120,
//               alignSelf: "stretch",
//               justifyContent: "center",
//               alignItems: "center"
//             }}/>
//             <Image
//                 square
//                 style={{ height: 80, width: 70 }}
//                 source={{
//                 uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
//                 }}
//             /> */}
//           <List
//             dataArray={routes}
//             style={{ marginTop: 56}}
//             renderRow={data => {
//               return (
//                 <ListItem
//                   button
//                   onPress={() => {
//                       this.props.navigation.navigate(data);
//                       this.props.navigation.closeDrawer();
//                     }}
//                 >
//                   <Text>{data}</Text>
//                 </ListItem>
//               );
//             }}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }

import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Image, View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';
import { Container } from 'native-base';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAaSURBVChTY0jfaUY8GlWNiUZVYyLaqd5pBgBbpCym1BWunwAAAABJRU5ErkJggg==';

async function signOut({ event, navigation }){
  event.persist();
  navigation.navigate('AuthNavigator', {}, NavigationActions.navigate({ routeName: 'SignOut' }));
}

const CustomDrawerContentComponent = (props) => {
  const { navigation } = props;
  //console.log({props});
  return (
    <Container>
      <Image style={styles.backgroundImage} source={{uri: base64Icon}}/>
      <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
          </SafeAreaView>
          <TouchableOpacity onPress={(event) => signOut({ event, navigation })}>
            <View>
              <Text>Logout</Text>
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
    width: '100%', height: 200, resizeMode: Image.resizeMode.stretch
  }
});

module.exports = CustomDrawerContentComponent;