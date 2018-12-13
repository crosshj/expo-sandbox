import React from 'react';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';
import {
    Text,
} from 'native-base';

import { variables } from './styleWrapper';

const Username = ({ inverse, bold, large, style }) => {
    const styles = {
        ...{
            text: {
                fontSize: large ? 20 : undefined,
                fontWeight: bold ? 'bold' : undefined,
                color: inverse ? variables.titleFontColor : variables.textColor
            }
        },
        ...style
    };

    return (
        <Subscribe to={[ GlobalStateContainer ]}>
            {({ state }) => (
                <Text style={styles.text}>{ state.username }</Text>
            )}
        </Subscribe>
    );
};



module.exports = Username;