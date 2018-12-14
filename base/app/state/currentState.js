import React from 'react';
import { Subscribe } from 'unstated';
import global from './globalStateContainer';

export default () => {
	return (
		<Subscribe to={[global]}>
			{({ state }) => state}
		</Subscribe>
	);
}