import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import {
    Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
    InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
    H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import theme from '../theme';

import { Subscribe } from 'unstated';
import { AuthStateContainer } from '../../base';

function Login({ navigation }) {
    const LoginButton = ({ style }) => (
        <Subscribe to={[AuthStateContainer]}>
            {({ state, login }) => (
                <Button
                    style={styles.formButton}
                    rounded block
                    onPress={(event) => login({ event, navigation })}
                >
                    <Text style={{ color: theme.inverseTextColor }}>Log in / Register</Text>
                </Button>
            )}
        </Subscribe>
    );

    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Logo />
                <LoginButton />
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