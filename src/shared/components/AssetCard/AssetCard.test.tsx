import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import getRandomAssets from 'mocks/assets';
import AssetCard, { Props } from './AssetCard';

describe('AssetCard', () => {
    const defaultProps: Props = {
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
        assetPageMode: 'full_screen',
        setAssetPageMode: jest.fn(),
        ...getRandomAssets(1)[0],
    };

    it('tests something', () => {
        shallow(<AssetCard {...defaultProps} />);
    });
});
