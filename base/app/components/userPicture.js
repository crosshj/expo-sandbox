import React from 'react';

import { Subscribe } from 'unstated';
import { AuthStateContainer } from '../../base';

import {
    Thumbnail,
} from 'native-base';

import userIconMale from './icons/userIcon-male';

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
                    source={{uri: state.picture || userIconMale()}}
                />
            )}
        </Subscribe>
    );
};


module.exports = UserPicture;