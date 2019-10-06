import React, { useState, useCallback, useRef, useEffect } from 'react';
import cn from 'classnames';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { List as VirtualList } from 'react-virtualized';

import categories from 'mocks/categories';
import Navbar from 'components/Navbar';
import FlatButton from 'components/FlatButton';
import getRandomAssets from 'mocks/assets';
import AssetCard from 'components/AssetCard';
import styles from './Home.module.scss';

type HomeTab = 'recent' | 'popular';

const assets = getRandomAssets(30);
const ASSET_CARD_WIDTH = 360;
const ASSET_CARD_HEIGHT = 363;

const Home = () => {
    const [listWidth, setListWidth] = useState(1000);
    const [listHeight, setListHeight] = useState(1000);
    const assetListRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<HomeTab>('recent');
    const onTabSelect = useCallback((tab: HomeTab) => setActiveTab(tab), []);

    const assetsInOneRow = Math.floor(listWidth / ASSET_CARD_WIDTH);
    const rowCount = Math.ceil(assets.length / assetsInOneRow);

    const resize = useCallback(() => {
        if (assetListRef.current) {
            const { width, height } = assetListRef.current.getBoundingClientRect();
            console.log('resize:', width, height);
            setListWidth(width);
            setListHeight(height);
        }
    }, [assetListRef]);

    useEffect(() => {
        resize();
        const resize$ = fromEvent(window, 'resize');
        const subscription = resize$
            .pipe(debounceTime(250))
            .pipe(tap(resize))
            .subscribe();
        return () => {
            subscription.unsubscribe();
        };
    }, [resize]);

    return (
        <div className={styles.home}>
            <Navbar className={styles.home__nav} options={categories} />
            <div className={styles.home__content}>
                <header className={styles.home__header}>
                    <h1 className={styles.home__title}>All assets</h1>
                    <div className={styles.home__tabs}>
                        <FlatButton
                            className={cn(styles.home__tab, {
                                [styles['home__tab--active']]: activeTab === 'recent',
                            })}
                            onClick={onTabSelect.bind(null, 'recent')}
                        >
                            Recent
                        </FlatButton>
                        <FlatButton
                            className={cn(styles.home__tab, {
                                [styles['home__tab--active']]: activeTab === 'popular',
                            })}
                            onClick={onTabSelect.bind(null, 'popular')}
                        >
                            Popular
                        </FlatButton>
                    </div>
                </header>
                <div ref={assetListRef} className={styles['home__asset-list']}>
                    <VirtualList
                        width={listWidth}
                        height={listHeight}
                        rowCount={rowCount}
                        rowHeight={ASSET_CARD_HEIGHT}
                        rowRenderer={({ key, index, style }) => {
                            const rowData = assets.slice(
                                index * assetsInOneRow,
                                (index + 1) * assetsInOneRow
                            );
                            return (
                                <div key={key} style={style} className={styles['home__asset-row']}>
                                    {rowData.map((asset, i) => (
                                        <AssetCard key={i} {...asset} />
                                    ))}
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
