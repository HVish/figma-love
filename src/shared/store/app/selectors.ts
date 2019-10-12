import { createSelector } from 'reselect';
import { AppState } from './types';

export const app = (state: { app: AppState }): AppState => state.app;

export const getLocale = createSelector(
    [app],
    (app) => app.locale
);

export const getIsNavOpen = createSelector(
    [app],
    (app) => app.isNavOpen
);

export const getAssetPageMode = createSelector(
    [app],
    (app) => app.assetPageMode
);
