import React from 'react';
//import { StatusBar } from "react-native";
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View } from "native-base";

//import Popup from '../components/popup';
//import ListView from '../components/listview';
import Header from '../components/header';
//import userIconMale from '../components/icons/userIcon-male';

import { UserName, UserEmail, UserPicture } from '../../base';
import theme from '../theme';

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
                {/* <View style={ styles.userInfoView }>
                    <Image style={{
                        width: 200,
                        height: 200,
                        marginTop: 40,
                        marginLeft: 10
                    }} source={{uri: userIconMale()}}/>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}
                    >Day Trader</Text>
                    <Text style={{}}
                    >daytrader@bob.com</Text>
                    <Text style={{
                        marginTop: 40,
                        fontWeight: 'bold'
                    }}>Push token:</Text>
                    <Text>{this.state.pushToken}</Text>
                </View> */}
                <View style={styles.userInfoView}>
                    <UserPicture size={250} theme={theme} />
                </View>
                <View style={styles.userInfoView}>
                    <UserName large bold theme={theme} />
                    <UserEmail theme={theme} />

                    {/* TODO: make component for token */}
                    <Text style={{
                        marginTop: 40,
                        fontWeight: 'bold'
                    }}>{ this.state.pushToken && 'Push token:'}</Text>
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