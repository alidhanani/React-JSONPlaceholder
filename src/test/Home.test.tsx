import { render } from '@testing-library/react';

import App from 'src/component/DefaultLayout';

test('renders learn react link', () => {
  render(<App />);
});

describe('Check current URL path', () => {
  it('should contain the current path', () => {
    const currentPath = '/';
    expect(window.location.pathname).toContain(currentPath);
  });
});
