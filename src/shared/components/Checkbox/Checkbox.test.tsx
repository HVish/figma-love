import React from 'react';
import i18next from 'i18next';
import { shallow } from 'enzyme';

import Checkbox, { Props } from './Checkbox';

describe('Checkbox', () => {
    const defaultProps: Props = {
        checked: false,
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
    };

    it('tests something', () => {
        shallow(<Checkbox {...defaultProps} />);
    });
});
