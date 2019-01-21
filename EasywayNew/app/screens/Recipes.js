import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import {
  Spinner, Text, View, Content, Container, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import appJson from '../../app.json';

import Header from '../components/header';

import theme from '../theme';

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    title={'Recipes'}
                    hideSearch={true}
                />
                <Content style={styles.content}>
                    <Form style={{
                        marginTop: 40,
                    }}>
                        <Text style={{ color: theme.textColor }}>Recipes
                        
                    </Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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