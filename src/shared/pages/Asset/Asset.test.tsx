import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import Asset, { Props } from './Asset';

describe('Asset', () => {
    const defaultProps: Props = {
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
        mode: 'full_screen',
    };

    it('tests something', () => {
        shallow(<Asset {...defaultProps} />);
    });
});
