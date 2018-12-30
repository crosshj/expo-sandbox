import React from 'react';

import { Subscribe } from 'unstated';
import AuthStateContainer from './authStateContainer';

import {
    Text,
} from 'native-base';

const Email = ({ inverse, bold, style, small, theme }) => {
    const styles = {
        ...{
            text: {
                fontWeight: bold ? 'bold' : 'normal',
                fontSize: small ? 10 : undefined,
                color: inverse ? theme.titleFontColor : theme.textColor
            }
        },
        ...style
    };

    return (
        <Subscribe to={[ AuthStateContainer ]}>
            {({ state }) => (
                <Text style={styles.text}>{ state.email }</Text>
            )}
        </Subscribe>
    );
};



module.exports = Email;