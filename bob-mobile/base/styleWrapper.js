import React from 'react';

import nativeBase, {
    StyleProvider,
} from 'native-base';

import getTheme from './native-base-theme/components';

const StyleWrapper = ({ children, theme }) => (
    <StyleProvider style={getTheme(theme)}>
        { children }
    </StyleProvider>
);

export const component = StyleWrapper;
export const dependencies = [
    { 'nativebase': nativeBase }
];