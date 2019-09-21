import React, { useState, useCallback } from 'react';
import { WithTranslation } from 'react-i18next';
import cn from 'classnames';

import { ReactComponent as SearchIcon } from 'shared/assets/search-icon.svg';
import { ReactComponent as CancelIcon } from 'shared/assets/cancel-icon.svg';

import FlatButton from 'components/FlatButton';
import styles from './Search.module.scss';

export interface Props extends WithTranslation {
    value: string;
    className?: string;
    compact?: boolean;
    placeholder?: string;
    onCancel?(): void;
    onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

const Search = ({ className, compact = false, placeholder, value, onChange, onCancel }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(compact);

    const onExpand = useCallback(() => setIsCollapsed(false), []);
    const onCancelClick = useCallback(() => {
        onCancel && onCancel();
        if (compact) {
            setIsCollapsed(!isCollapsed);
        }
    }, [compact, isCollapsed, onCancel]);

    return (
        <div
            className={cn(styles.search, className, {
                [styles['search--compact']]: compact,
                [styles['search--collapsed']]: isCollapsed,
            })}
        >
            {!compact && (
                <div className={styles.search__icon}>
                    <SearchIcon />
                </div>
            )}
            {compact && (
                <FlatButton className={styles.search__icon} onClick={onExpand}>
                    <SearchIcon />
                </FlatButton>
            )}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.search__field}
            />
            {(value || compact) && (
                <FlatButton className={styles.search__cancel} onClick={onCancelClick}>
                    <CancelIcon />
                </FlatButton>
            )}
        </div>
    );
};

export default Search;
