import React from 'react';
import { StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

function HeaderComponent({ navigation, title, hideSearch }) {
  return (
    <Header style={styles.header}>
      <Left>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icon name='menu' style={{ color: 'white', marginLeft: 15 }} />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title>{title || ''}</Title>
      </Body>
      <Right>
        <Button transparent>
          {!hideSearch &&
            <Icon name='search' />
          }
        </Button>
      </Right>
    </Header>
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
