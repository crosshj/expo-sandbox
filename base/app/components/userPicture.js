import React from 'react';

import { Subscribe } from 'unstated';
import GlobalStateContainer from '../state/globalStateContainer';
import {
    Thumbnail,
} from 'native-base';

import userIconMale from './icons/userIcon-male';
//import { variables } from './styleWrapper';

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
        <Subscribe to={[ GlobalStateContainer ]}>
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