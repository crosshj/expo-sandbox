import React from 'react';

import { component as StyleWrapper } from './styleWrapper';
import { component as StateWrapper } from './stateWrapper';
import AuthStateContainer from './authStateContainer';

import { SplashScreen } from 'expo';

import getNavigator from './navigator';

const GetAppBase = ({
	screens = {}, options = {},
	Loading, Logo, appJson, Theme
}) => {
	SplashScreen.hide();
	const BaseNavigator = getNavigator({
		screens, options, Loading, Logo, appJson, Theme
	});

	return () => (
		<StateWrapper>
			<StyleWrapper theme={Theme}>
				<BaseNavigator />
			</StyleWrapper>
		</StateWrapper>
	);
};


export default GetAppBase;
export {
	AuthStateContainer
};