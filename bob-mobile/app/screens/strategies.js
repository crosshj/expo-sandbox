import React from 'react';

import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, View } from "native-base";

import Header from '../components/header';
import WebView from '../components/niceWebview';

//const uri = 'http://192.168.1.95:3000/mobileChart/';
const uri = 'https://test.letbob.com/chartiq/chart.html#AAPL';

export default class Strategies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container style={styles.container}>
                <Header
                    navigation={navigation}
                    title={'Strategies'}
                    hideSearch={true}
                />
                <View style={ styles.mainView }>
                    <TouchableOpacity
                        style={styles.webviewContainer}
                        onPress={() => { navigation.navigate('Landscape') }}
                    >
                        <WebView
                            source={{uri}}
                            onMessage={(event)=> console.log(event.nativeEvent.data)}
                        />
                    </TouchableOpacity>
                    <Text>Click for full screen.</Text>
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
    },
    webviewContainer: {
        paddingTop: 20,
        height: 300,
        width: '95%'
    }
});