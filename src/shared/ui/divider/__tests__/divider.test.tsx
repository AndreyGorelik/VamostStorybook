import React from 'react';
import renderer from 'react-test-renderer';
import 'jest';

import Divider from '../divider.component';

describe('<Divider />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
