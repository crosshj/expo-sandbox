import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          {/* <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}/>
            <Image
                square
                style={{ height: 80, width: 70 }}
                source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                }}
            /> */}
          <List
            dataArray={routes}
            style={{ marginTop: 56}}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                      this.props.navigation.navigate(data);
                      this.props.navigation.closeDrawer();
                    }}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

// import React from 'react';
// import { StyleSheet, ScrollView, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
// import { DrawerItems, SafeAreaView } from 'react-navigation';

// const CustomDrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// module.exports = CustomDrawerContentComponent;