import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import {
    Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
    InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
    H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';


Text.defaultProps.uppercase = false;

import theme from '../theme';

import { Subscribe } from 'unstated';
import { AuthStateContainer } from '../../base';

function Login({ navigation }) {
    const LoginButton = ({ style }) => (
        <Subscribe to={[AuthStateContainer]}>
            {({ state, login }) => (
                <Button
                    style={styles.buttonContainer}
                    rounded block
                >
                    <Button
                        style={styles.buttonChild}
                        rounded block
                        onPress={(event) => login({ event, navigation })}
                    >
                        <Text style={styles.buttonChildText}>Log in / Register</Text>
                    </Button>
                </Button>
            )}
        </Subscribe>
    );

    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Logo />
                <View style={styles.blurb}>
                    <Text style={styles.blurbText}>YOUR INVESTMENTS.</Text>
                    <Text style={styles.blurbText}>AUTOMATED.</Text>
                </View>
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
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 5,
        borderColor: '#78c263',
        borderWidth: 2,
        backgroundColor: 'transparent',
        marginTop: 20,
        padding: 1,
        height: 52,
        elevation: 0,
    },
    buttonChild: {
        marginTop: -3,
        height: 46,
        backgroundColor: '#78c263',
        elevation: 0,
        flex: 1,
    },
    buttonChildText: {
        fontSize: 18,
        color: theme.inverseTextColor,
    },
    blurb: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blurbText: {
        fontSize: 24,
    }
});

module.exports = Login;