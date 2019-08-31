import React from 'react';
import cn from 'classnames';
import { WithTranslation } from 'react-i18next';
import css from './Checkbox.module.css';

export interface Props extends WithTranslation {
    checked: boolean;
    onChange?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Checkbox = ({ checked, onChange }: Props) => {
    return (
        <span
            className={cn(css.checkbox, {
                [css.checked]: checked,
            })}
            onClick={onChange}
        />
    );
};

export default Checkbox;
