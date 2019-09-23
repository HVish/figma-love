import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { WithTranslation } from 'react-i18next';

import { ReactComponent as CloseIcon } from 'shared/assets/cross.svg';
import { ReactComponent as FigmaLoveLogo } from 'shared/assets/figma-love-logo.svg';

import FlatButton from 'components/FlatButton';
import Search, { useSearch } from 'components/Search';
import styles from './Navbar.module.scss';

export interface Props extends WithTranslation {
    isOpen?: boolean;
    options: string[];
    onToggle?(isOpen?: boolean): void;
    children?: React.ReactNode;
}

const Navbar = ({ isOpen, options, onToggle, children }: Props) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const { value: search, onChange: setSearch, onCancel: cancelSearch } = useSearch();
    const toggle = useCallback(() => onToggle && onToggle(), [onToggle]);

    return (
        <>
            <nav
                className={cn(styles.nav, {
                    [styles['nav--open']]: isOpen,
                    [styles['nav--searching']]: isSearchOpen,
                })}
            >
                <div className={styles.nav__header}>
                    <FigmaLoveLogo className={styles.nav__logo} />
                    <FlatButton className={styles.nav__browse} onClick={toggle}>
                        Browse categories
                    </FlatButton>
                    <Search
                        compact
                        value={search}
                        placeholder="Search"
                        onChange={setSearch}
                        onCancel={cancelSearch}
                        onToggle={setIsSearchOpen}
                        className={styles.nav__search}
                    />
                </div>
                <div className={styles.nav__options}>
                    <FigmaLoveLogo className={styles.nav__logo} />
                    <FlatButton className={styles.nav__close} onClick={toggle}>
                        <CloseIcon />
                    </FlatButton>
                    <div className={cn(styles.nav__option, styles['nav__option--title'])}>
                        Categories
                    </div>
                    {options.map((option, key) => (
                        <div key={key} className={styles.nav__option}>
                            {option}
                        </div>
                    ))}
                    {children}
                </div>
            </nav>
            <nav
                className={cn(styles['nav-desktop'], {
                    [styles['nav-desktop--open']]: isOpen,
                    [styles['nav-desktop--searching']]: isSearchOpen,
                })}
            >
                <div className={styles['nav-desktop__header']}>
                    <FigmaLoveLogo className={styles['nav-desktop__logo']} />
                    <div className={styles['nav-desktop__search-wrapper']}>
                        <Search
                            value={search}
                            placeholder="Search"
                            onChange={setSearch}
                            onCancel={cancelSearch}
                            onToggle={setIsSearchOpen}
                            className={styles['nav-desktop__search']}
                        />
                    </div>
                </div>
                <div className={styles['nav-desktop__options-label']}>
                    <span>Categories</span>
                </div>
                <div className={styles['nav-desktop__options']}>
                    <div
                        className={cn(
                            styles['nav-desktop__option'],
                            styles['nav-desktop__option--title']
                        )}
                    >
                        Categories
                    </div>
                    {options.map((option, key) => (
                        <div key={key} className={styles['nav-desktop__option']}>
                            {option}
                        </div>
                    ))}
                    {children}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
