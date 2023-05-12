import React from 'react';

import Profile from './profile';
import Settings from './settings';

import Recipes from './Recipes';
import Shopping from './Shopping';

const screens = {
    Recipes: { screen: Recipes },
    'Shopping List': { screen: Shopping },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
};

export default screens;