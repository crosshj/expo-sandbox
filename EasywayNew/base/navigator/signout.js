import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Text, Content, Container, Button, Form
} from 'native-base';

const getLogout = (theme, Logo, appJson) => {
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

    return () => (
        <Container style={styles.container}>
            <Logo />
            <Content style={styles.content}>
                <Form style={{
                    marginTop: 40,
                }}>
                    <Button
                        style={styles.formButton}
                        bordered success block
                    >
                        <Text style={{ color: theme.textColor }}>Signing Out...</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

module.exports = getLogout;