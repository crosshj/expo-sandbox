import { Container } from 'unstated';
import { AuthSession } from 'expo';
import jwtDecoder from 'jwt-decode';
import {
		Alert,
		AsyncStorage,
} from 'react-native';

// https://github.com/expo/auth0-example/blob/master/App.js
// https://github.com/expo/auth0-example/issues/6

// ALTERNATIVE: https://github.com/auth0-samples/react-native-embedded-login/blob/master/actions/auth/index.js


const auth0ClientId = 'Jmk1cLExXAy9PRe9dztRP4WfmEc43MRv'; //it's okay to share this publicly
const auth0Domain = 'https://crosshj.auth0.com';

function toQueryString(params) {
    return '?' + Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

function tryParse(string){
	try {
		return JSON.parse(string);
	}
	catch (e) {
		return undefined;
	}
}

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
			if(!encodedToken) return;

			const decodedToken = jwtDecoder(encodedToken);
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

    _loginWithAuth0 = async ({ event, navigation }) => {
				this.setState(state => ({ authLoading: true }));
				const redirect_uri = AuthSession.getRedirectUrl();
        console.log(`Redirect URL (add this to Auth0): ${redirect_uri}`);
        const authUrl = `${auth0Domain}/authorize` + toQueryString({
            client_id: auth0ClientId,
            response_type: 'token',
            scope: 'openid name email profile',
            redirect_uri,
        });
        console.log({ authUrl });
        const result = await AuthSession.startAsync({
            authUrl,
        });

        console.log({ result });
        if (result.error || result.errorCode) {
            Alert.alert('Error', result.error_description
                || result.errorCode
                || 'something went wrong while logging in');
            return;
        }

        if (result.type === 'success') {
            this.handleParams(result.params, navigation);
        }
    }

    _logoutAuth0 = ({ navigation }) => {
				AsyncStorage.setItem('userToken', '');
				this.setState(state => ({
            username: undefined,
            picture: undefined,
            token: undefined,
            email: undefined
        }));
        navigation.navigate('AuthNavigator');
    }

    handleParams = (responseObj, navigation) => {
        // fetch(`${auth0Domain}/userinfo?access_token=${responseObj.access_token}`)
        //     .then(response => {
        //         if (response.status === 200) {
        //             response.json().then(parsedResponse => {
        //             const { nickname, email, picture } = parsedResponse
        //             console.log({ parsedResponse })
        //             this.setState({ nickname, email, picture });
        //             })
        //         }
        //         else {
        //             console.log('Something went wrong. ErrorCode: ', response.status);
        //         }
        //     })
				const encodedToken = responseObj.id_token;

				// no need to await?
				AsyncStorage.setItem('userToken', encodedToken);

				const decodedToken = jwtDecoder(encodedToken);
        const { name: username, picture, email } = decodedToken;
        console.log({ decodedToken });
        this.setState({ username, picture, email, token: decodedToken, authLoading: false });
        navigation.navigate('AppNavigator');
    }
}

// because singleton
export default new GlobalStateContainer();
