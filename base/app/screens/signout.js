import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Logo from '../components/logo';

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import appJson from '../../app.json';

// const delay = (shouldReject, timeout = 2000) =>
//   new Promise((res, rej) =>
//     setTimeout(shouldReject ? rej : res, timeout));

export default class SignOut extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     signedOut: false
        // };
        //this.props.signOut();
    }

    // async signOut(props){
        // await AsyncStorage.clear();
        //console.log({ signout: props.signOut.toString() })
        // props.signOut();
				//this.setState({ signedOut: true });
    // }

    render() {
        // if(!this.state.signedOut){
        //     return (
        //         <AppLoading />
        //     );
        // }
        //const { navigation } = this.props;
        return (
            <Container style={styles.container}>
                <Logo />
                <Content style={styles.content}>
                    {/* <Text
                        style={{
                            //fontSize: 30,
                            color: '#999',
                            width: '100%',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            marginBottom: 30
                        }}
                    >Signing Out..</Text> */}
                    <Form style={{
                        marginTop: 40,
                    }}>
                        <Button
                            style={styles.formButton}
                            bordered success block
                        >
                            <Text style={{ color: 'white' }}>Signing Out...</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

// import { Subscribe } from 'unstated';
// import GlobalStateContainer from '../state/globalStateContainer';

// export default (props) => (
//     <Subscribe to={[GlobalStateContainer]}>
//         {({ state, _logoutAuth0 }) => (
//             <SignOut
//                 { ...props }
//                 state={state}
//                 signOut={ () => _logoutAuth0(props) }
//             />
//         )}
//     </Subscribe>
// );


// const styles = StyleSheet.create({
//     container: {
//       display: 'flex',
//       marginTop: 'auto',
//       backgroundColor: "white",
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       height: '100%',
//     },
//     content: {
//       flex: 3,
//       minWidth: '80%',
//       marginBottom: 0,
//     },
//     footer: {
//         marginTop: 'auto',
//         flex: 1,
//         maxHeight: 80,
//     }
//   });

  const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 'auto',
        backgroundColor: appJson.expo.splash.backgroundColor,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
    content: {
        flex: 3,
        minWidth: '80%',
        marginBottom: 0,
    },
    formButton: {
        borderColor: appJson.expo.splash.backgroundColor,
        borderWidth: 0,
        color: appJson.expo.splash.backgroundColor
    }
});