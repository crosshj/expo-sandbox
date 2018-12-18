import React from 'react';

import { Subscribe } from 'unstated';
import AuthStateContainer from './authStateContainer';

import {
    Thumbnail,
} from 'native-base';

const UserPicture = ({
    size = 75, small, large, square, circle = true, style
}) => {
    const styles = {
        ...{
            picture: {
                width: size,
                height: size,
                borderRadius: size / 2
            }
        },
        ...style
    };

    return (
        <Subscribe to={[ AuthStateContainer ]}>
            {({ state }) => (
                <Thumbnail circle
                    style={styles.picture}
                    source={{uri: state.picture || ''}}
                />
            )}
        </Subscribe>
    );
};


module.exports = UserPicture;