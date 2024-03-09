import Dashboard from './page';
import { render, screen } from '@testing-library/react';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    render(<Dashboard />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
