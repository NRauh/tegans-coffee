import React from 'react';
import { shallow } from 'enzyme';
import Layout from './layout';

describe('Layout', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Layout>
        <h1 id="test-title">Some Title</h1>
      </Layout>
    );

    expect(wrapper.debug()).toBeDefined();
    expect(wrapper.exists('#test-title')).toBe(true);
  });
});
