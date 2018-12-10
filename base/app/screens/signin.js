import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import appJson from '../../app.json';

import Logo from '../components/logo';

import {
    Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
    InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
    H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';

function Login({ navigation }) {
    console.log('--- login page should be showing!!');
    return (
        <Subscribe to={[GlobalStateContainer]}>
            {({ state, _loginWithAuth0 }) => (
                <Container style={styles.container}>
                    <Logo />
                    <Content style={styles.content}>
                        <Form style={{
                            marginTop: 40,
                        }}>
                            <Button
                                style={styles.formButton}
                                bordered success block
                                onPress={(event) => _loginWithAuth0({ event, navigation })}
                            >
                                {state.token &&
                                    <Text style={{ color: 'white' }}>Loading...</Text>
                                }
                                {!state.token &&
                                    <Text style={{ color: 'white' }}>Sign In / Sign Up</Text>
                                }
                            </Button>
                        </Form>
                    </Content>
                </Container>
            )}
        </Subscribe>
    );
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
        borderColor: '#ddd',
        borderWidth: 10,
        color: appJson.expo.splash.backgroundColor
    }
});

module.exports = Login;