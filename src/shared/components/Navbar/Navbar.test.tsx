import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import Navbar, { Props } from './Navbar';

describe('Navbar', () => {
    const defaultProps: Props = {
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
        isOpen: false,
        options: [],
    };

    it('tests something', () => {
        shallow(<Navbar {...defaultProps} />);
    });
});
