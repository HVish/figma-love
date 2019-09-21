export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    locale: Locale;
    isNavOpen: boolean;
}>;

export type RootState = Readonly<{
    app: AppState;
}>;

export type Action = {
    type: string;
    payload: any;
};
