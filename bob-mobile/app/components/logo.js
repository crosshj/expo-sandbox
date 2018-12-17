import React from 'react';
import { StyleSheet, Image, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
//import logoURI from './icons/logo';
const logo = require('../../assets/logo.png');

function Logo(){
    return(
        <View style={styles.container}>
            <Image
                //source={{ uri: logoURI() }}
                source={logo}
                resizeMode='contain'
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'flex-end',
        height: 100
    },
    image: {
        width: 200,
        //height: 100,
        //marginTop: 0,
        //flex: 1,
        //marginBottom: 0
    },
});

module.exports = Logo;