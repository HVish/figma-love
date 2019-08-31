import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import FlatButton, { Props } from './FlatButton';

describe('FlatButton', () => {
    const defaultProps: Props = {
        onClick: () => {},
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
    };

    it('tests something', () => {
        shallow(<FlatButton {...defaultProps} />);
    });
});
