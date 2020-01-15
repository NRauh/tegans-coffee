import React from 'react';
import { shallow } from 'enzyme';
import { useStaticQuery } from 'gatsby';
import Bio from './bio';

describe('Bio', () => {
  it('should render', () => {
    const fakeData = {
      avatar: {
        childImageSharp: {
          fixed: 'fixedUrl',
        },
      },
      site: {
        siteMetadata: {
          author: 'Test',
          social: {
            twitter: 'TwitterTest',
            github: 'GithubTest',
          },
        },
      },
    };
    useStaticQuery.mockReturnValue(fakeData);

    const wrapper = shallow(<Bio />);

    expect(wrapper.debug()).toBeDefined();
    expect(useStaticQuery).toHaveBeenCalledTimes(1);
  });
});
