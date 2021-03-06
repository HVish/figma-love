import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import Search, { Props } from './Search';

describe('Search', () => {
    const defaultProps: Props = {
        value: '',
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
    };

    it('tests something', () => {
        shallow(<Search {...defaultProps} />);
    });
});
