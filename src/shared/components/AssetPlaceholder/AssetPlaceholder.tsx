import React from 'react';
import { WithTranslation } from 'react-i18next';
import cn from 'classnames';

import AssetPlaceholderIcon from 'shared/assets/asset_placeholder_logo.svg';
import styles from './AssetPlaceholder.module.scss';

export interface Props extends WithTranslation, BaseProps {}

const AssetPlaceholder = ({ className }: Props) => {
    return (
        <div className={cn(styles['asset-card'], className)}>
            <div className={styles['asset-card__image']}>
                <img src={AssetPlaceholderIcon} alt="placeholder icon" />
            </div>
            <div className={styles['asset-card__categories']} />
            <div className={styles['asset-card__title']} />
            <div className={styles['asset-card__description']} />
            <div className={styles['asset-card__description']} />
        </div>
    );
};

export default AssetPlaceholder;
