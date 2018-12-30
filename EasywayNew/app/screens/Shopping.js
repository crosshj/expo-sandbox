import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import appJson from '../../app.json';

import theme from '../theme';

export default class Shopping extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Form style={{
                        marginTop: 40,
                    }}>
                        <Text style={{ color: theme.textColor }}>Shopping</Text>
                        <Text style={{ color: theme.textColor }}>Why there's no page here, hubby?</Text>
                        <Text style={{ color: theme.textColor }}>Because Wifey is lazy and no make it!</Text>
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