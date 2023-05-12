import React from 'react';
import { StyleSheet, Image, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
import logoURI from './icons/logo';

const nullFunction = () => {};

function Logo({onLoadEnd = nullFunction, fadeDuration=0}){
    return(
        <View style={styles.container}>
            <Image
                source={{ uri: logoURI() }}
                resizeMode='stretch'
                style={styles.image}
                onLoadEnd={onLoadEnd}
                fadeDuration={fadeDuration}
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
        height: 250,
        marginTop: 223,
        marginLeft: -6,
        marginBottom: 80
    },
});

module.exports = Logo;