import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
import { render } from '@testing-library/react-native';

it(`renders correctly`, () => {
  render(<MonoText>Snapshot test!</MonoText>);
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
