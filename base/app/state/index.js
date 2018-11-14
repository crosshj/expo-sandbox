import React from 'react';
import { Provider, Subscribe } from 'unstated';

import GlobalStateContainer from './globalStateContainer';

const StateWrapper = ({ children, ...props }) => {
  return (
      <Provider>
        { children }
      </Provider>
  );
};

export default StateWrapper;
