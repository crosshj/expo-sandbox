import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Container, Title, Left, Icon, Right, Button, Body,
    Content, Text, Card, CardItem, View, ListItem, CheckBox
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/header';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    state = {};

    render() {
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
                        <FlatList
                            data={[
                                {key: 'Share anonymous usage data', state: true },
                                {key: 'Update social media', state: false },
                                {key: 'Track spending', state: true },
                                {key: 'Protect private data', state: true },
                                {key: 'Use internal browser', state: false },
                                {key: 'Encrypt connection', state: true },
                            ]}
                            renderItem={({item}) => (
                                <ListItem style={styles.listItem}>
                                    <Body>
                                        <Text>{item.key}</Text>
                                    </Body>
                                    <CheckBox checked={item.state} />
                                </ListItem>
                            )}
                        />
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