import React from 'react';
import { shallow } from 'enzyme';
import BioImage from './bio-image';

describe('BioImage', () => {
  it('renders', () => {
    const wrapper = shallow(<BioImage image="/foo.jpg" alt="test" />);
    expect(wrapper.debug()).toBeDefined();
  });
});
