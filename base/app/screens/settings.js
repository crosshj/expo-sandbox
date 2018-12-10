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
import StyleWrapper from '../components/styleWrapper';

export default class HomeScreen extends React.Component {
    render() {
        const renderItem = ({toggle}) => ({item}) => (
            <TouchableWithoutFeedback
                onPress={() => toggle(item)}
                style = {{borderWidth: 1}}
            >
                <ListItem
                    style={styles.listItem}
                    onPress={() => toggle(item)}
                >
                    <Body>
                        <Text>{item.key}</Text>
                    </Body>
                    <CheckBox
                        checked={item.state}
                        onPress={() => toggle(item)}
                    />
                </ListItem>
            </TouchableWithoutFeedback>
        );

        return (
            <StyleWrapper>
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
                                {({state, toggleProp}) => (
                                    <FlatList
                                        data={Object.keys(state.settings)
                                            .map(key => ({key, state: state.settings[key]}))
                                            .sort((a, b) => a.key.localeCompare(b.key))
                                        }
                                        renderItem={renderItem({
                                            toggle: (i) => toggleProp(i.key)
                                        })}
                                        keyExtractor={item => item.key}
                                    />
                                )}
                            </Subscribe>
                        </ScrollView>
                    </View>
                </Container>
            </StyleWrapper>
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