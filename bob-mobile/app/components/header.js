import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';
import Modal from "react-native-modal";

import {
  StyleProvider, Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/commonColor';

function HeaderComponent({ navigation, title, hideSearch }){
    return(
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <StyleProvider style={getTheme(material)}>
          <Header>
            <Left>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Icon name='menu' style={{ color: 'white', marginLeft: 15 }}/>
              </TouchableOpacity>
            </Left>
            <Body>
              <Title>{title || 'Bob'}</Title>
            </Body>
            <Right>
              <Button transparent>
                { !hideSearch &&
                  <Icon name='search' />
                }
              </Button>
            </Right>
          </Header>
        </StyleProvider>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
                //TODO: would be nice to get 56 from theme variables
                height: 56 + StatusBar.currentHeight
            }
        })
    },
});

module.exports = HeaderComponent;
