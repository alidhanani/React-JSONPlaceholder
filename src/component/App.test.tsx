import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';
import App from './DefaultLayout';

describe('<DefaultLayout>', () => {
  it('renders the header and main content', () => {
    const { getByText } = render(<DefaultLayout />);
    const header = getByText('Header');
    const main = getByText('Main Content');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});

describe('<App>', () => {
  it('renders the default layout for any route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Route path='*' element={<App />} />
      </MemoryRouter>
    );
    const header = screen.getByText('Header');
    const main = screen.getByText('Main Content');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
