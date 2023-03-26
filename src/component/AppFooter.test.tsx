import { render, screen } from '@testing-library/react';

import AppFooter from './AppFooter';

describe('AppFooter', () => {
  it('renders the correct title', () => {
    render(<AppFooter />);
    const title = screen.getByRole('heading', { level: 6 });
    expect(title).toHaveTextContent('React Json Placeholder');
  });
});
