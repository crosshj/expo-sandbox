import React from 'react';

import Navigator from './app/navigator';
import State from './app/state';

export default class App extends React.Component {
  render() {
    return (
      <State>
        <Navigator />
      </State>
    );
  }
}
