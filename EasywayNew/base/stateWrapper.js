import React from 'react';
import unstated, { Provider } from 'unstated';

const StateWrapper = ({ children, ...props }) => {
  return (
      <Provider>
        { children }
      </Provider>
  );
};

export const component = StateWrapper;
export const dependencies = [
  { unstated }
];