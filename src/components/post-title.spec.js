import React from 'react';
import { shallow } from 'enzyme';
import PostTitle from './post-title';

describe('PostTitle', () => {
  it('should be a use the tag given', () => {
    const wrapper = shallow(<PostTitle titleTag="h1">Test Title</PostTitle>);
    expect(wrapper.find('h1').text()).toEqual('Test Title');
  });

  it('should have a link if a link prop is given', () => {
    const wrapper = shallow(
      <PostTitle titleTag="h1" link="/foo">
        Test
      </PostTitle>
    );

    expect(wrapper.exists('Link')).toBe(true);
    wrapper.setProps({ link: null });
    expect(wrapper.exists('Link')).toBe(false);
  });
});
