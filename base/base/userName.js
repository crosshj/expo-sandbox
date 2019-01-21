import React from 'react';

import { Subscribe } from 'unstated';
import AuthStateContainer from './authStateContainer';

import {
    Text,
} from 'native-base';

const Username = ({ inverse, bold, large, style, theme }) => {
    const styles = {
        ...{
            text: {
                fontSize: large ? 20 : undefined,
                fontWeight: bold ? 'bold' : undefined,
                color: inverse ? theme.toolbarBtnTextColor : theme.textColor
            }
        },
        ...style
    };

    return (
        <Subscribe to={[ AuthStateContainer ]}>
            {({ state }) => (
                <Text style={styles.text}>{ state.username }</Text>
            )}
        </Subscribe>
    );
};



module.exports = Username;