import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';
import App from './DefaultLayout';

describe('<DefaultLayout>', () => {
  it('renders the header and main content', () => {
    const { getByText } = render(<DefaultLayout />);
    const header = getByText('JSON Placeholder');
    expect(header).toBeInTheDocument();
  });
});

describe('<App>', () => {
  it('renders the default layout for any route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    const header = screen.getByText('JSON Placeholder');
    expect(header).toBeInTheDocument();
  });
});
