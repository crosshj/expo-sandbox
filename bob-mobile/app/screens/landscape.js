import React from 'react';
import { Dimensions, View } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const landscape = (child) => class Landscape extends React.Component {
    render(){
        const offset = 0;
        return (
            <View
                style={{
                    height: deviceHeight,
                    width: deviceWidth,
                    backgroundColor: '#1c2a35',
                    //backgroundColor: 'red',
            }}>
                <View style={{
                    height: deviceWidth,
                    width: deviceHeight - offset,
                    transform: [
                        { translateY: (-deviceWidth)/2},
                        { translateX: (-deviceHeight + offset)/2},
                        { rotate: '90deg'},
                        { translateX: (deviceHeight + offset)/2},
                        { translateY: (-deviceWidth)/2},
                    ]
                }}>
                    { child }
                </View>
            </View>
        );
    }
}

export default landscape;
