import React, { useCallback } from 'react';
import { WithTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './AssetCard.module.scss';

export interface Props extends WithTranslation, BaseProps, Asset {}

const AssetCard = ({
    title,
    description,
    image,
    slug,
    assetURL,
    categories,
    keywords,
    ...props
}: Props) => {
    const onClick = useCallback(() => {
        // TODO: show asset modal
    }, []);

    return (
        <div className={cn(styles['asset-card'], props.className)} onClick={onClick}>
            <img className={styles['asset-card__image']} src={image} alt="asset thumbnail" />
            <div className={styles['asset-card__categories']}>{categories.join(', ')}</div>
            <div className={styles['asset-card__title']}>{title}</div>
            <p className={styles['asset-card__description']}>{description}</p>
        </div>
    );
};

export default AssetCard;
