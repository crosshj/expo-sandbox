import React from 'react';
import {
    StyleSheet, Image, Platform, StatusBar, TouchableOpacity, FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body,
    Content, Text, Card, CardItem, View, ListItem, CheckBox
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/header';
import { ScrollView } from 'react-native-gesture-handler';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';

export default class HomeScreen extends React.Component {
    render() {
        const renderItem = (global) => ({item}) => (
            <TouchableWithoutFeedback
                onPress={() => {global.toggleProp(item.key)} }
                style = {{borderWidth: 1}}
            >
                <ListItem
                    style={styles.listItem}
                    onPress={() => {global.toggleProp(item.key)} }
                >
                    <Body>
                        <Text>{item.key}</Text>
                    </Body>
                    <CheckBox
                        checked={item.state}
                        onPress={ () => {global.toggleProp(item.key)} }
                    />
                </ListItem>
            </TouchableWithoutFeedback>
        );

        return (
            <Container style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    title={'Settings'}
                    hideSearch={true}
                />
                <View style={ styles.settingsView }>
                    <View style={ styles.CircleShapeView }>
                        <Ionicons
                            name="md-settings"
                            size={200} color="white"
                        />
                    </View>
                    <ScrollView style={{
                        width: '80%',
                        marginTop: 20
                    }}>
                        <Subscribe to={[ GlobalStateContainer ]}>
                            {(global) => (
                                <FlatList
                                    data={Object.keys(global.state.settings)
                                        .map(key => ({key, state: global.state.settings[key]}))
                                    }
                                    renderItem={renderItem(global)}
                                />
                            )}
                        </Subscribe>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    settingsView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flex: 1
    },
    CircleShapeView: {
        width: 200,
        height: 200,
        borderRadius: 200/2,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {

    }
});