import { Container } from 'unstated';

import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';
import {
    Alert,
    AsyncStorage,
} from 'react-native';

class GlobalStateContainer extends Container {
    state = {
        isReady: true,
        isLoggedIn: true,
        modalVisible: false,
        count: 0,
        settings: {
            'Share anonymous usage data': false,
            'Update social media': false,
            'Track spending': true,
            'Protect private data': true,
            'Use internal browser': false,
            'Encrypt connection': true
        },
        username: undefined,
        email: undefined,
        picture: undefined,
        token: undefined
    };

    _init = async () => {
        const encodedToken = await AsyncStorage.getItem('userToken');
        console.log({ encodedToken });
        if (!encodedToken) return;

        var decodedToken = undefined;
        try {
            decodedToken = jwtDecoder(encodedToken);
        } catch (e){
            return;
        }
        if (!decodedToken) return;

        const { name: username, picture, email } = decodedToken;

        this.setState(state => ({
            username: username || state.username,
            email: email || state.email,
            picture: picture || state.picture,
            token: encodedToken
        }));
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    toggleProp = (prop) => {
        this.setState(state => ({
            settings: { ...state.settings, ...{ [prop]: !this.state.settings[prop] }}
        }));
    }
}

// because singleton
export default new GlobalStateContainer();