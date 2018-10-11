import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

async function signIn({ event, navigation }){
    event.persist()
    await AsyncStorage.setItem('userToken', 'abc');
    await delay(false, 2000);
    navigation.navigate('AppNavigator');
}

function Login({ navigation }){
  return (
    <Container style={styles.container}>
        <Logo />
        <Content style={styles.content}>
            <Form style={{
                marginTop: 0,
            }}>
                <Item style={{ marginLeft: 0, marginBottom: 15 }}>
                    <Input placeholder='Username' />
                </Item>
                <Item style={{ marginLeft: 0, marginBottom: 35 }}>
                    <Input placeholder='Password' />
                </Item>
                <Button
                    style={styles.formButton}
                    success block
                    onPress={(event) => signIn({ event, navigation })}
                >
                <Text>Sign In</Text>
                </Button>
            </Form>
        </Content>
        <Content style={styles.footer}>
            <Text>Create an account</Text>
        </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 'auto',
    backgroundColor: "white",
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  content: {
    flex: 3,
    minWidth: '80%',
    marginBottom: 0,
  },
  footer: {
      marginTop: 'auto',
      flex: 1,
      maxHeight: 80,
  }
});

module.exports = Login;