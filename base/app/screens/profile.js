import React from 'react';
//import { StatusBar } from "react-native";
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View } from "native-base";

//import Popup from '../components/popup';
//import ListView from '../components/listview';
import Header from '../components/header';

import UserName from '../components/userName';
import UserEmail from '../components/userEmail';
import UserPicture from '../components/userPicture';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pushToken: ''
        };
        this._bootstrapAsync();
    }

    async _bootstrapAsync() {
        const pushToken = await AsyncStorage.getItem('pushToken');
        this.setState({ pushToken })
    }

    render() {
        return (
                <Container style={styles.container}>
                    <Header
                        navigation={this.props.navigation}
                        title={'Profile'}
                        hideSearch={true}
                    />
                    <View style={ styles.userInfoView }>
                        <UserPicture size={250}/>
                    </View>
                    <View style={ styles.userInfoView }>
                        <UserName large bold/>
                        <UserEmail />

                        {/* TODO: make component for token */}
                        <Text style={{
                            marginTop: 40,
                            fontWeight: 'bold'
                        }}>Push token:</Text>
                        <Text>{this.state.pushToken}</Text>
                    </View>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
});