import React, { useState, useCallback } from 'react';
import { ReactComponent as FigmaLoveLogo } from 'shared/assets/figma-love-logo.svg';
import css from './Admin.module.css';
import Search from 'components/Search/Search';

const Admin = () => {
    const [search, setSearch] = useState('');
    const onSearchChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setSearch((e.target as HTMLInputElement).value);
    }, []);

    return (
        <div className={css.admin}>
            <header>
                <div className={css.headerWrapper}>
                    <div className={css.headerContent}>
                        <FigmaLoveLogo className={css.logo} />
                        <span className={css.count}>24 assets</span>
                    </div>
                    <div className={css.headerContent}>
                        <button className={css.addNewButton}>Add new</button>
                        <Search value={search} placeholder="Search" onChange={onSearchChange} />
                    </div>
                </div>
            </header>
            <main>main</main>
            <footer>footer</footer>
        </div>
    );
};

export default Admin;
