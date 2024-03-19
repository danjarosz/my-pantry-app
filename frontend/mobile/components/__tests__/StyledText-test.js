import { render } from '@testing-library/react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  render(<MonoText>Snapshot test!</MonoText>);
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
