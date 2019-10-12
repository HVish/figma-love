import React, { useCallback } from 'react';
import { WithTranslation } from 'react-i18next';
import cn from 'classnames';
import { useHistory } from 'react-router';

import slugify from 'helpers/slugify';
import { PageMode } from 'store/app/types';
import styles from './AssetCard.module.scss';

export interface Props extends WithTranslation, BaseProps, Asset {
    setAssetPageMode: (mode: PageMode) => any;
    assetPageMode: PageMode;
}

const AssetCard = ({
    title,
    description,
    image,
    slug,
    assetURL,
    categories,
    keywords,
    setAssetPageMode,
    assetPageMode,
    ...props
}: Props) => {
    const history = useHistory();
    const onClick = useCallback(() => {
        if (assetPageMode === 'full_screen') {
            setAssetPageMode('popup');
        }
        history.push(`${slugify(categories[0])}/${slug}`);
    }, [history, categories, slug, assetPageMode, setAssetPageMode]);

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
