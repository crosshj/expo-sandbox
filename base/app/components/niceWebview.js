import React from 'react';
import { View, WebView, Text, ActivityIndicator } from 'react-native';
import { RippleLoader } from 'react-native-indicator';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';

const LoadingPage = ({ loading, offset }) => {
    return loading
    ? <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: offset,
                backgroundColor: '#1c2a35',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <RippleLoader
                size={80}
                color='white'
                betweenSpace={5}
                rotationSpeed={1600}
                strokeWidth={3}
            />
        </View>
    : null;
};

export default class MyWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { props, loading: true };
    }

    showWebView(){
        setTimeout(() =>
            this.setState(() => ({ loading: false })),
            1000
        );
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Subscribe to={[ GlobalStateContainer ]}>
                    {(global) => (
                        <Text style={{color: 'white'}}>{global.state.count}</Text>
                    )}
                </Subscribe>
                <WebView
                    { ...this.state.props }
                    style={{flex:1}}
                    onLoadEnd={() => { this.showWebView() }}
                />
                <LoadingPage
                    offset={240}
                    loading={this.state.loading}
                />
            </View>
        );
    }
}
