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

export default class SignOut extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Logo />
                <Content style={styles.content}>
                    <Form style={{
                        marginTop: 40,
                    }}>
                        <Button
                            style={styles.formButton}
                            bordered success block
                        >
                            <Text style={{ color: 'white' }}>Signing Out...</Text>
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
        backgroundColor: appJson.expo.splash.backgroundColor,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
    content: {
        flex: 3,
        minWidth: '80%',
        marginBottom: 0,
    },
    formButton: {
        borderColor: appJson.expo.splash.backgroundColor,
        borderWidth: 0,
        color: appJson.expo.splash.backgroundColor
    }
});