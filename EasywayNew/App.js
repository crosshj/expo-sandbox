import AppBase from './base';

import Navigator from './app/navigator';
import Theme from './app/theme';

const App = AppBase({
	Navigator, Theme
});

export default App;

/*
    For this to truly function as a base project, need following passed to this module

    navigator
    theme
    state

    more? maybe?
    components
    screens
    services

*/