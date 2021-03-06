import React from 'react';
import cn from 'classnames';
import { WithTranslation } from 'react-i18next';
import styles from './FlatButton.module.scss';

export interface Props extends WithTranslation, BaseProps {
    type?: 'default' | 'danger';
    children?: React.ReactNode;
    onClick?(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const FlatButton = ({ type, className, onClick, children }: Props) => {
    return (
        <button
            type="button"
            className={cn(className, styles['flat-button'], {
                [styles.danger]: type === 'danger',
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default FlatButton;
