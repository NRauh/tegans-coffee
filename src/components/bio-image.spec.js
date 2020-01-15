import React from 'react';
import { shallow } from 'enzyme';
import BioImage from './bio-image';

describe('BioImage', () => {
  it('renders', () => {
    const image = {
      base64: 'somehash',
      width: 100,
      height: 100,
      src: 'foo.png',
      srcSet: 'foo.png 2x',
    };
    const wrapper = shallow(<BioImage image={image} alt="test" />);
    expect(wrapper.debug()).toBeDefined();
  });
});
