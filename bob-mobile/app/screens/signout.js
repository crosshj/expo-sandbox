import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import theme from '../theme';

import {
    Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
    InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
    H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

function Logout({ navigation }) {
    const LogoutButton = ({ style }) => (
        <Button
            style={styles.formButton}
            rounded block
            onPress={(event) => {}}
        >
            <Text style={{ color: theme.inverseTextColor }}>Signing Out...</Text>
        </Button>
    );
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Logo />
                <LogoutButton />
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

module.exports = Logout;