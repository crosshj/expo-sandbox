import React, { Component } from 'react';
import { Dimensions, View, WebView } from 'react-native';

const uri = 'https://demo.chartiq.com/index.html?utm_campaign=demo%20now&utm_source=website%20header%20nav&utm_medium=charting%20library%20cta';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class MyWeb extends Component {
  render() {
    return (
        <View style={{
            height: deviceHeight,
            width: deviceWidth,
            backgroundColor: '#1c2a35',
            //backgroundColor: 'red',
        }}>
            <View style={{
                height: deviceWidth,
                width: deviceHeight - 20,
                transform: [
                    { translateY: (-deviceWidth)/2},
                    { translateX: (-deviceHeight+20)/2},
                    { rotate: '90deg'},
                    { translateX: (deviceHeight + 20)/2},
                    { translateY: (-deviceWidth)/2},
                ]
            }}>
                <WebView
                    source={{ uri }}
                />
            </View>
        </View>
    );
  }
}

module.exports = MyWeb;