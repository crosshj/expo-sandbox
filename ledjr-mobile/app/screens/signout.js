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

async function signIn({ navigation }){
    navigation.navigate('SignIn');
}

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedOut: false
        };
        this.signOut();
    }

    async signOut(){
        await AsyncStorage.clear();
        await delay(false, 2000);
        this.setState({ signedOut: true });
    }

    render() {
        if(!this.state.signedOut){
            return (
                <AppLoading />
            );
        }
        const { navigation } = this.props;
        return (
            <Container style={styles.container}>
                <Logo />
                <Content style={styles.content}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: '#999',
                            width: '100%',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            marginBottom: 30
                        }}
                    >Come back again soon!</Text>
                    <Form style={{
                        marginTop: 0,
                    }}>
                        <Button
                            style={styles.formButton}
                            success block
                            onPress={(event) => signIn({ navigation })}
                        >
                            <Text>Sign In Again</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
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