import React from 'react';
import renderer from 'react-test-renderer';
import SiteHeader from './site-header';

describe('SiteHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SiteHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
