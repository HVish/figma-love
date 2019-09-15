import React from 'react';
import { shallow } from 'enzyme';
import i18next from 'i18next';

import ImageUploader, { Props } from './ImageUploader';

describe('ImageUploader', () => {
    const defaultProps: Props = {
        t: jest.fn(),
        tReady: true,
        i18n: i18next,
    };

    it('tests something', () => {
        shallow(<ImageUploader {...defaultProps} />);
    });
});
