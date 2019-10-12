export type Locale = 'en_US' | 'de_DE';
export type PageMode = 'full_screen' | 'popup';

export type AppState = Readonly<{
    locale: Locale;
    isNavOpen: boolean;
    assetPageMode: PageMode;
}>;

export type RootState = Readonly<{
    app: AppState;
}>;

export type Action = {
    type: string;
    payload: any;
};
