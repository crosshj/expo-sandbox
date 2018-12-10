import React from 'react';
import { Provider, Subscribe } from 'unstated';

const StateWrapper = ({ children, ...props }) => {
  return (
      <Provider>
        { children }
      </Provider>
  );
};

export default StateWrapper;
