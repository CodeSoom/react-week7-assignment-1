import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders "Log in" button', () => {
    const { container, getByRole } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
    expect(getByRole('button', { name: 'Log in' })).not.toBeNull();
  });
});
