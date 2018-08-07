import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

function Logo (){
  return (
    <Text>Ledjr</Text>
  );
}

function Login({ handler }){
  return (
    <Container style={styles.container}>
      <Container style={styles.content}>
        <Logo  style={styles.logo}/>
        <Input style={styles.formField}>
          Username
        </Input>
        <Input style={styles.formField}>
          Password
        </Input>
        <Button style={styles.formButton}>
          <Text>Sign In</Text>
        </Button>
        <Text style={styles.formLink}>Create an account</Text>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});

module.exports = Login;