import React from 'react';
import { shallow } from 'enzyme';
import PostHeader from './post-header';

describe('PostHeader', () => {
  it('should render', () => {
    const wrapper = shallow(
      <PostHeader
        titleTag="h1"
        slug="/foo"
        title="Test"
        date="Oct. 15, 2019"
        subtitleTag="h2"
      />
    );

    expect(wrapper.debug()).toBeDefined();
    expect(wrapper.exists('h2')).toBe(true);
  });
});
