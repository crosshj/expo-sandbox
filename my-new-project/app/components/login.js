import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

function Logo ({style}){
  return (
    <Text style={style}>Ledjr</Text>
  );
}

function Login({ handler }){
  return (
    <Container style={styles.container}>
      <Content />
      <Content style={styles.content}>
        <Form>
          <Item>
            <Logo style={styles.logo}/>
          </Item>
          <Item underline={false}>
            <Input placeholder='Username' />
          </Item>
          <Item underline='false'>
            <Input placeholder='Password' />
          </Item>
          <Item>
            <Button style={styles.formButton}>
              <Text>Sign In</Text>
            </Button>
          </Item>
          <Item>
            <Text style={styles.formLink}>Create an account</Text>
          </Item>
        </Form>
      </Content>
      <Content />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#62bc26",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    minWidth: '80%'
  },
  logo: {
    textAlign: 'center',
    alignSelf: 'center'
  }
});

module.exports = Login;