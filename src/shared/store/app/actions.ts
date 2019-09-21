import { Locale } from './types';

export const ActionTypes = {
    SET_LOCALE: 'app/set-locale',
    TOGGLE_NAV: 'app/toggle-nav',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SET_LOCALE,
    payload: locale,
});

export const toggleNavBar = (isOpen?: boolean) => ({
    type: ActionTypes.TOGGLE_NAV,
    payload: isOpen,
});
