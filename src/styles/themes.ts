import { Theme } from '../models/theme';

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: '#EDEFF1',
    },
};

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'grey',
    },
};

export const themes = { light, dark };
