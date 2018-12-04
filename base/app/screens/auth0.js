
import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';

export default class Auth0 extends React.Component {
    render() {
        return (
            <Subscribe to={[GlobalStateContainer]}>
                {({ state, _loginWithAuth0, _logoutAuth0 }) => (
                    <View style={styles.container}>
                        { state.picture &&
                            <Image
                                source={{uri: state.picture}}
                                style={{width: 200, height: 200}}
                            />
                        }
                        {state.username !== undefined
                            ? (
                                <View>
                                    <Text style={styles.title}>Hi {state.username}!</Text>
                                    <Button title="Logout Auth0" onPress={_logoutAuth0} />
                                </View>
                            )
                            : (
                                <View>
                                    <Text style={styles.title}>Example: Auth0 login</Text>
                                    <Button title="Login with Auth0" onPress={_loginWithAuth0} />
                                </View>
                            )
                        }
                    </View>
                )}
            </Subscribe>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
    },
});