import React from 'react';
import Profile from './profile';
import Settings from './settings';

const uri = 'https://home.crosshj.com';
import WebView from '../components/niceWebview';
// import Landscape from './landscape';
import Portrait from './portrait';

const screens = {
    'Is It Christmas?': { screen: Portrait(<WebView
      source={{uri: 'https://isitchristmas.com/'}}
      onMessage={(event)=> console.log(event.nativeEvent.data)}
    />) },
    'Empire State Building Colors': { screen: Portrait(<WebView
        source={{uri: 'http://whatcoloristheempirestatebuilding.com/'}}
        onMessage={(event)=> console.log(event.nativeEvent.data)}
      />) },
    '30 Seconds': { screen: Portrait(<WebView
        source={{uri: 'https://e.ggtimer.com/30%20seconds'}}
        onMessage={(event)=> console.log(event.nativeEvent.data)}
      />) },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
};

export default screens;