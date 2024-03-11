import { ExternalLink } from '../ExternalLink';
import { render, screen } from '@testing-library/react-native';

describe('ExternalLink', () => {
  it('should be defined', () => {
    expect(ExternalLink).toBeDefined();
  });

  it('shoudl render anchor with correct label', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    expect(
      screen.getByRole('link', {
        name: 'Examplee'
      })
    ).toBeTruthy();
  });
});
