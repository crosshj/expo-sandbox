import React from 'react';

import { component as StyleWrapper } from './styleWrapper';
import { component as StateWrapper } from './stateWrapper';
import AuthStateContainer from './authStateContainer';

import UserEmail from './userEmail';
import UserName from './userName';
import UserPicture from './userPicture';

import { SplashScreen } from 'expo';

const GetAppBase = ({
	Theme, Navigator
}) => {
	SplashScreen.hide();

	return () => (
		<StateWrapper>
			<StyleWrapper theme={Theme}>
				<Navigator />
			</StyleWrapper>
		</StateWrapper>
	);
};

export default GetAppBase;
export {
	AuthStateContainer,
	UserEmail, UserName, UserPicture
};
