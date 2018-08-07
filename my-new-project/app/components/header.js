import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';
import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

function HeaderComponent({ navigation }){
    return(
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => {
              navigation.openDrawer();
            }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Ledjr</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#62bc26',
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
