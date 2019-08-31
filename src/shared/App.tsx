import React, { useCallback } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Route } from 'react-router';
import Admin from 'pages/Admin';
import favicon from '../shared/assets/favicon.png';
import { setLocale } from './store/app/actions';
import css from './App.module.css';

type Props = {
    setLocale: (locale: string) => void;
    t: (key: string) => string;
};

const App = ({ setLocale, t }: Props) => {
    const handleLocaleChange = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            setLocale(e.currentTarget.value);
        },
        [setLocale]
    );

    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="Figma love - UX Design mockups"
                titleTemplate="%s – Figma love - UX Design mockups"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <Route path="/admin" component={Admin} />
            {/* <h2>{t('i18n-example')}</h2>
            <p>
                <button value="de_DE" onClick={handleLocaleChange}>
                    Deutsch
                </button>
                <button value="en_US" onClick={handleLocaleChange}>
                    English
                </button>
            </p> */}
        </div>
    );
};

const mapDispatchToProps = {
    setLocale,
};

export default connect(
    null,
    mapDispatchToProps
)(withTranslation()<any>(App));
