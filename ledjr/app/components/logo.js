import React from 'react';
import { StyleSheet, Image, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
import logoURI from './icons/logo';

function Logo(){
    return(
        <View style={styles.container}>
            <Image
                source={{ uri: logoURI() }}
                resizeMode='contain'
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 100,
        marginTop: 110,
        flex: 1,
        marginBottom: 0
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});

module.exports = Logo;