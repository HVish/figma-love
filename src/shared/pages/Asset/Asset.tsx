import React, { useCallback } from 'react';
import { WithTranslation } from 'react-i18next';
import cn from 'classnames';
import { format as formatDate } from 'date-fns';
import { useHistory } from 'react-router';

import Dialog from 'components/Dialog';
import getRandomAssets from 'mocks/assets';

import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as CalenderIcon } from 'assets/calender-icon.svg';

import { PageMode } from 'store/app/types';
import styles from './Asset.module.scss';

export interface Props extends WithTranslation, BaseProps {
    mode: PageMode;
}

const assetData = getRandomAssets(1)[0];

interface CategoriesProps {
    categories: string[];
    className?: string;
}
const Categories = ({ categories, className }: CategoriesProps) => {
    const history = useHistory();
    const onCategoryClick = useCallback(() => history.push('/'), [history]);

    return (
        <div className={cn(styles.categories, className)}>
            <span>in</span>
            {categories.map((category, index) => (
                <span key={index} className="link" onClick={onCategoryClick}>
                    {category}
                    {index < categories.length - 1 ? ',' : ''}
                </span>
            ))}
        </div>
    );
};

const AssetDialog = () => {
    const history = useHistory();
    const onClose = useCallback(() => history.push('/'), [history]);

    return (
        <Dialog isOpen onRequestClose={onClose}>
            <img className={styles.asset__image} src={assetData.image} alt="asset image" />
            <div className={styles.asset__content}>
                <div className={styles.asset__details}>
                    <div className={styles.asset__title}>{assetData.title}</div>
                    <Categories
                        categories={assetData.categories}
                        className={styles.asset__categories}
                    />
                    <p className={styles.asset__description}>{assetData.description}</p>
                </div>
                <div className={styles['asset__meta-data']}>
                    <div>
                        <div className={styles.analytics}>
                            <span className={styles.analytics__icon}>
                                <EyeIcon />
                            </span>
                            <span className={styles.analytics__details}>
                                {new Intl.NumberFormat().format(assetData.viewCount)} views
                            </span>
                        </div>
                        <div className={styles.analytics}>
                            <span className={styles.analytics__icon}>
                                <CalenderIcon />
                            </span>
                            <span className={styles.analytics__details}>
                                {formatDate(assetData.createdAt, "'Added on ' MMM dd, yyyy")}
                            </span>
                        </div>
                    </div>
                    <a
                        className="cta-button cta-button--lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={assetData.assetURL}
                    >
                        Get the mockup
                    </a>
                </div>
            </div>
        </Dialog>
    );
};

const AssetPage = () => {
    return (
        <div className={styles.asset__wrapper}>
            <div className={cn(styles.asset, styles['asset--full-page'])}>
                <div className={styles.asset__header}>
                    <div>
                        <div className={styles.asset__title}>{assetData.title}</div>
                        <Categories
                            categories={assetData.categories}
                            className={styles.asset__categories}
                        />
                    </div>
                    <a
                        className={cn('cta-button', 'cta-button--lg', styles.asset__cta)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={assetData.assetURL}
                    >
                        Get the mockup
                    </a>
                </div>
                <img className={styles.asset__image} src={assetData.image} alt="asset image" />
                <div className={styles.asset__content}>
                    <p className={cn(styles.asset__details, styles.asset__description)}>
                        {assetData.description}
                    </p>
                    <div>
                        <div className={styles.analytics}>
                            <span className={styles.analytics__icon}>
                                <EyeIcon />
                            </span>
                            <span className={styles.analytics__details}>
                                {new Intl.NumberFormat().format(assetData.viewCount)} views
                            </span>
                        </div>
                        <div className={styles.analytics}>
                            <span className={styles.analytics__icon}>
                                <CalenderIcon />
                            </span>
                            <span className={styles.analytics__details}>
                                {formatDate(assetData.createdAt, "'Added on ' MMM dd, yyyy")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Asset = ({ mode }: Props) => {
    return mode === 'popup' ? <AssetDialog /> : <AssetPage />;
};

export default Asset;
