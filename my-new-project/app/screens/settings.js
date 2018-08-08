import React from 'react';
//import { StatusBar } from "react-native";
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";

//import Popup from '../components/popup';
//import ListView from '../components/listview';
import Header from '../components/header';

export default class HomeScreen extends React.Component {
    state = {};


    render() {
        return (
            <Container style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <Text>Settings View</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});