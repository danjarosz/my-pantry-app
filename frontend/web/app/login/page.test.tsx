import Login from './page';
import { render, screen } from '@testing-library/react';

describe('<Login />', () => {
  it('should render without crashing', () => {
    render(<Login />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
