import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { getByRole } = render((<LoginPage />));

    expect(getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
  });
});
