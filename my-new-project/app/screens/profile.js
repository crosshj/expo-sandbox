import React from 'react';
//import { StatusBar } from "react-native";
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View } from "native-base";

//import Popup from '../components/popup';
//import ListView from '../components/listview';
import Header from '../components/header';
import userIconMale from '../components/icons/userIcon-male';

export default class HomeScreen extends React.Component {
    state = {};

    render() {
        return (
            <Container style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    title={'Profile'}
                    hideSearch={true}
                />
                <View style={ styles.userInfoView }>
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
                    >Johnathan Doe</Text>
                    <Text style={{}}
                    >johnathandoe33@ledjr.com</Text>
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
    }
});