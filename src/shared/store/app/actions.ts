import { Locale, PageMode } from './types';

export const ActionTypes = {
    SET_LOCALE: 'app/set-locale',
    TOGGLE_NAV: 'app/toggle-nav',
    SET_ASSET_PAGE_MODE: 'app/set-asset-page-mode',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SET_LOCALE,
    payload: locale,
});

export const toggleNavBar = (isOpen?: boolean) => ({
    type: ActionTypes.TOGGLE_NAV,
    payload: isOpen,
});

export const setAssetPageMode = (mode: PageMode) => ({
    type: ActionTypes.SET_ASSET_PAGE_MODE,
    payload: mode,
});
