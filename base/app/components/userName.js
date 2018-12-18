import React from 'react';

import { Subscribe } from 'unstated';
import AuthStateContainer from '../../base/authStateContainer';
import {
    Text,
} from 'native-base';

import theme from '../theme';

const Username = ({ inverse, bold, large, style }) => {
    const styles = {
        ...{
            text: {
                fontSize: large ? 20 : undefined,
                fontWeight: bold ? 'bold' : undefined,
                color: inverse ? theme.titleFontColor : theme.textColor
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