import React from 'react';
import { AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import appJson from '../../app.json';

import Logo from '../components/logo';

import {
	Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
	InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
	H3, Left, Right, Body, Footer, FooterTab, Form, Item
} from 'native-base';

import { Subscribe } from 'unstated';
import { AuthStateContainer } from '../../base';
import theme from '../theme';

function Login({ navigation }) {
	//console.log('--- login page');

	return (
		<Subscribe to={[AuthStateContainer]}>
			{({ state, login }) => {
				// if(state.token){
				// 	setTimeout(() => navigation.navigate('AppNavigator'), 0);
				// 	return <Container style={styles.container}></Container>
				// }
				// if(state.authLoading){
				// 	return <Container style={styles.container}></Container>
				// }
				// const { signingOut } = state;
				return (
						<Container style={styles.container}>
								<Logo />
								<Content style={styles.content}>
									<Form style={{
										marginTop: 40,
									}}>
										<Button
											style={styles.formButton}
											bordered block
											onPress={(event) => {
												//if(signingOut){ return; }
												login({ event, navigation });
											}}
										>
											<Text style={{ color: theme.textColor }}>Sign In / Sign Up</Text>
										</Button>
									</Form>
								</Content>
						</Container>
					);
			}}
		</Subscribe>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		marginTop: 'auto',
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
		borderColor: theme.textColor,
		borderWidth: 10,
		color: appJson.expo.splash.backgroundColor
	}
});

module.exports = Login;