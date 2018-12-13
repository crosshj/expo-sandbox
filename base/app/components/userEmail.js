import React from 'react';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';
import {
    Text,
} from 'native-base';

import { variables } from './styleWrapper';

const Email = ({ inverse, bold, style, small }) => {
    const styles = {
        ...{
            text: {
                fontWeight: bold ? 'bold' : 'normal',
                fontSize: small ? 10 : undefined,
                color: inverse ? variables.titleFontColor : variables.textColor
            }
        },
        ...style
    };

    return (
        <Subscribe to={[ GlobalStateContainer ]}>
            {({ state }) => (
                <Text style={styles.text}>{ state.email }</Text>
            )}
        </Subscribe>
    );
};



module.exports = Email;