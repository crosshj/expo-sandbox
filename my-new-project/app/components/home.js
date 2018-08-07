import React from "react";
//import { StatusBar } from "react-native";
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";

import Popup from './popup';
import ListView from './listview';
import Header from './header';

const vendorNames = [
    'McDonalds', 'Burger King', 'Wendys', 'BP', 'Shell', 'Walmart', 'Target',
    'Kroger', 'Publix', 'Tin Drum', 'Chipotle', '5 Guys', 'Radio Shack', 'Frys Electronics'
];

export default class HomeScreen extends React.Component {
    state = {
        selectedItem: undefined,
        items: (() => vendorNames
            .map((x, i) => ({
                name: x,
                full_name: 'Foo Bar',
                score: i + 1
            }))
        )()
    };

    setModalVisible(visible, x) {
        this.setState({
            modalVisible: visible,
            selectedItem: x
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <ListView
                    items={this.state.items}
                    setModalVisible={this.setModalVisible.bind(this)}
                    popup={() =>
                        <Popup {...{
                            modalVisible: this.state.modalVisible,
                            selectedItem: this.state.selectedItem,
                            setModalVisible: this.setModalVisible.bind(this)
                        }} />
                    }
                />
                {/*
                <Footer style={styles.footer}>
                    <FooterTab style={styles.footer}>
                        <Button full>
                        <Text style={styles.footerText}>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // ...Platform.select({
        //     android: {
        //         marginTop: StatusBar.currentHeight
        //     }
        // })
    },
    footer: {
        backgroundColor: '#eee'
    },
    footerText: {
        color: "#333"
    },
    modalImage: {
        resizeMode: 'contain',
        height: 200
    },
    bold: {
        fontWeight: '600'
    },
    negativeMargin: {
        marginBottom: -10
    }
});