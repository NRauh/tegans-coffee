import React from 'react';
import { shallow } from 'enzyme';
import SiteHeader from './site-header';

describe('SiteHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SiteHeader />);
    expect(wrapper.html()).toBeDefined();
  });
});
