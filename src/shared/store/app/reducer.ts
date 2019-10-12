import { produce } from 'immer';
import { ActionTypes } from './actions';
import { Action, AppState } from './types';

export const initialState = Object.freeze<AppState>({
    locale: 'en_US',
    isNavOpen: false,
    assetPageMode: 'full_screen',
});

export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        const { type, payload } = action;

        switch (type) {
            case ActionTypes.SET_LOCALE: {
                draft.locale = payload;
                return;
            }
            case ActionTypes.TOGGLE_NAV: {
                draft.isNavOpen = payload !== undefined ? payload : !draft.isNavOpen;
                return;
            }
            case ActionTypes.SET_ASSET_PAGE_MODE: {
                draft.assetPageMode = payload;
                return;
            }
        }
    });
