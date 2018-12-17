import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import {
    Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
    InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
    H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import appJson from '../../app.json';
import theme from '../theme';

const delay = (shouldReject, timeout = 2000) =>
    new Promise((res, rej) =>
        setTimeout(shouldReject ? rej : res, timeout));

async function signIn({ event, navigation }) {
    event.persist()
    await AsyncStorage.setItem('userToken', 'abc');
    await delay(false, 2000);
    navigation.navigate('AppNavigator');
}

function Login({ navigation }) {
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Logo />
                <Button
                    style={styles.formButton}
                    rounded block
                    onPress={(event) => signIn({ event, navigation })}
                >
                    <Text style={{ color: theme.inverseTextColor }}>Log in / Register</Text>
                </Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    content: {
        marginTop: 110,
        marginBottom: 'auto',
        justifyContent: 'center',
    },
    formButton: {
        backgroundColor: '#78c263',
        marginTop: 100,
        borderWidth: 0,
        borderColor: theme.inverseTextColor,
        color: theme.inverseTextColor
    }
});

module.exports = Login;