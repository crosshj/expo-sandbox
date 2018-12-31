import React from 'react';

import {
	StyleSheet
} from 'react-native';

import {
	Text, Content, Container, Button, Form
} from 'native-base';

import { Subscribe } from 'unstated';
import { AuthStateContainer } from '../authStateContainer';

const getLogin = (theme, Logo, appJson) => {
	function Login({ navigation }) {
		return (
			<Subscribe to={[AuthStateContainer]}>
				{({ state, login }) => {
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

	return Login;
};

module.exports = getLogin;