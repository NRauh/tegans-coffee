import React from 'react';
import { shallow } from 'enzyme';
import SocialLinks from './social-links';

describe('SocialLinks', () => {
  it('renders', () => {
    const wrapper = shallow(
      <SocialLinks twitterName="Test" githubName="Test" />
    );
    expect(wrapper.html()).toBeDefined();
  });
});
