import { Container } from 'unstated';
import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';
import {
    Alert,
    AsyncStorage,
} from 'react-native';

import { NavigationActions, DrawerActions } from 'react-navigation';


// https://github.com/expo/auth0-example/blob/master/App.js
// https://github.com/expo/auth0-example/issues/6

// ALTERNATIVE: https://github.com/auth0-samples/react-native-embedded-login/blob/master/actions/auth/index.js


var auth0ClientId = undefined;
var auth0Domain = undefined;

function toQueryString(params) {
    return '?' + Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

function tryParse(string) {
    try {
        return JSON.parse(string);
    }
    catch (e) {
        return undefined;
    }
}

const delay = (shouldReject, timeout = 2000) =>
    new Promise((res, rej) =>
        setTimeout(shouldReject ? rej : res, timeout));

class AuthStateContainer extends Container {
    state = {
        username: undefined,
        picture: undefined,
        email: undefined,
        token: undefined
    };

    init = async ({ clientId, domain }) => {
        auth0ClientId = clientId || auth0ClientId;
        auth0Domain = domain || auth0Domain;

        const encodedToken = await AsyncStorage.getItem('userToken');
        if (!encodedToken) return;

        var decodedToken = undefined;
        try {
            decodedToken = jwtDecoder(encodedToken);
        } catch(e) {
            decodedToken = {};
        }
        const { name: username, picture, email } = decodedToken;

        this.setState(state => ({
            username: username || state.username,
            email: email || state.email,
            picture: picture || state.picture,
            token: encodedToken
        }));
    }

    login = async ({ event, navigation }) => {
        this.setState(state => ({ authLoading: true }));

        const redirect_uri = AuthSession.getRedirectUrl();
        console.log(`Redirect URL (add this to Auth0): ${redirect_uri}`);
        const authUrl = `${auth0Domain}/authorize` + toQueryString({
            client_id: auth0ClientId,
            response_type: 'token',
            scope: 'openid name email profile',
            redirect_uri,
        });
        //console.log({ authUrl });
        const result = await AuthSession.startAsync({
            authUrl,
        });

        //console.log({ result });
        if (result.error || result.errorCode || result.type !== 'success') {
            Alert.alert('Error', result.error_description
                || result.errorCode
                || 'something went wrong while logging in');
            this.setState({ authLoading: false });
            return;
        }

        const encodedToken = result.params.id_token;

        // no need to await?
        AsyncStorage.setItem('userToken', encodedToken);
        var decodedToken = undefined;
        try {
            decodedToken = jwtDecoder(encodedToken);
        } catch(e) { /**/}

        const { name: username, picture, email } = decodedToken || {};
        // console.log({ decodedToken });
        this.setState({ username, picture, email, token: decodedToken, authLoading: false });
        navigation.navigate('AppNavigator');
    }

    logout = async ({ navigation }) => {
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate('AuthNavigator', {}, NavigationActions.navigate({ routeName: 'SignOut' }));

        this.setState(state => ({
            username: undefined,
            picture: undefined,
            token: undefined,
            email: undefined
        }));

        // notify server?  invalidate token?
        await delay(false, 2000);

        navigation.navigate('AuthNavigator', {}, NavigationActions.navigate({ routeName: 'SignIn' }));
        AsyncStorage.setItem('userToken', '');
    }
}

// because singleton
export default new AuthStateContainer();
