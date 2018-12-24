/*
PulseLoader, DotsLoader, TextLoader, BubblesLoader, CirclesLoader,
RippleLoader, BreathingLoader, LinesLoader, MusicBarLoader, EatBeanLoader,
DoubleCircleLoader, RotationCircleLoader, RotationHoleLoader,
CirclesRotationScaleLoader, NineCubesLoader, LineDotsLoader,
ColorDotsLoader
*/
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinesLoader as Loader } from 'react-native-indicator';

import { Content, View } from 'native-base';

const Loading = () => (
    <Content contentContainerStyle={styles.content}>
        <View style={{ marginTop: '40%', marginBottom: 'auto' }}>
            <Loader color={'#999'} barWidth={10} barHeight={80} />
        </View>
    </Content>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;