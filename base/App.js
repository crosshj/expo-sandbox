import AppBase from './base';

import appJson from './app.json';
import Loading from './app/screens/loading';
import Logo from './app/components/logo';
import Theme from './app/theme';
import screens from './app/screens';

const options = {
    initialRouteName: '30 Seconds',
};

const App = AppBase({
    appJson, Loading, Logo, Theme, screens, options
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