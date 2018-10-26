import React from 'react';
import { Dimensions, View } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const portrait = (child) => class MyWeb extends React.Component {
    render(){
        return (
            <View
                style={{
                    height: deviceHeight,
                    width: deviceWidth,
                    paddingTop: 23,
                    backgroundColor: '#1c2a35',
                    //backgroundColor: 'red',
            }}>
                <View style={{
                    height: deviceHeight - 23,
                    width: deviceWidth}}
                >
                    { child }
                </View>
            </View>
        );
    }
}

export default portrait;
