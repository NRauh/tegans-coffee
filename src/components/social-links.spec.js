import React from 'react';
import { shallow } from 'enzyme';
import SocialLinks from './social-links';

describe('SocialLinks', () => {
  it('renders', () => {
    const wrapper = shallow(<SocialLinks />);
    expect(wrapper.html()).toBeDefined();
  });
});
