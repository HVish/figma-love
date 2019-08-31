import React from 'react';
import cn from 'classnames';
import { WithTranslation } from 'react-i18next';
import css from './FlatButton.module.css';

export interface Props extends WithTranslation {
    type?: 'default' | 'danger';
    children?: React.ReactNode;
    onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const FlatButton = ({ type, onClick, children }: Props) => {
    return (
        <button
            className={cn(css['flat-button'], {
                [css.danger]: type === 'danger',
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default FlatButton;
