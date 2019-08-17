import React from 'react';
import { ReactComponent as SearchIcon } from 'shared/assets/search-icon.svg';
import css from './search.module.css';

type Props = {
    value: string;
    placeholder?: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Search = ({ placeholder, value, onChange }: Props) => {
    return (
        <div className={css.searchWrapper}>
            <SearchIcon className={css.searchIcon} fill="currentColor" />
            <input
                type="text"
                className={css.searchField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
