import React from 'react';

import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View } from "native-base";

import Header from '../components/header';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    title={'Dashboard'}
                    hideSearch={true}
                />
                <View style={ styles.mainView }>
                    <Text>Dashboard</Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});