import React from 'react';

import {
    StyleProvider,
} from 'native-base';

import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

export default ({ children }) => (
    <StyleProvider style={getTheme(commonColor)}>
        { children }
    </StyleProvider>
);

export const variables = commonColor;
