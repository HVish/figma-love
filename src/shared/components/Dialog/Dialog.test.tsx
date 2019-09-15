import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import Dialog, { Props } from './Dialog';

describe('Dialog', () => {
    const defaultProps: Props = {
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
        isOpen: false,
    };

    it('tests something', () => {
        shallow(<Dialog {...defaultProps} />);
    });
});
