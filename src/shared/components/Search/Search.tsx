import React from 'react';
import { WithTranslation } from 'react-i18next';
import { ReactComponent as SearchIcon } from 'shared/assets/search-icon.svg';
import styles from './Search.module.scss';

export interface Props extends WithTranslation {
    value: string;
    placeholder?: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Search = ({ placeholder, value, onChange }: Props) => {
    return (
        <div className={styles['search-wrapper']}>
            <SearchIcon className={styles['search-icon']} fill="currentColor" />
            <input
                type="text"
                className={styles['search-field']}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
