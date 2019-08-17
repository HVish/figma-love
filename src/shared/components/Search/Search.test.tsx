import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search', () => {
    const defaultProps = { value: "" };

    it('tests something', () => {
        shallow(<Search {...defaultProps} />);
    });
});
