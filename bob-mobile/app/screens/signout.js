import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import theme from '../theme';

import {
    Text, View, Content, Container
} from 'native-base';

function Logout({ navigation }) {
    // const LogoutButton = ({ style }) => (
    //     <Button
    //         style={styles.buttonContainer}
    //         rounded block
    //     >
    //         <Button
    //             style={styles.buttonChild}
    //             rounded block
    //         >
    //             <Text style={{ color: theme.inverseTextColor }}>Logging Out...</Text>
    //         </Button>
    //     </Button>
    // );
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Logo />
                <View style={styles.blurb}>
                    <Text style={styles.blurbText}>LOGGING OUT...</Text>
                </View>
                {/* <LogoutButton /> */}
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    content: {
        marginTop: 110,
        marginBottom: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 5,
        borderColor: '#78c263',
        borderWidth: 2,
        backgroundColor: 'transparent',
        marginTop: 20,
        padding: 1,
        height: 52,
        elevation: 0,
    },
    buttonChild: {
        marginTop: -3,
        height: 46,
        backgroundColor: '#78c263',
        elevation: 0,
        flex: 1,
    },
    buttonChildText: {
        fontSize: 18,
        color: theme.inverseTextColor,
    },
    blurb: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blurbText: {
        fontSize: 24,
    }
});

module.exports = Logout;