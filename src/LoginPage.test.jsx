import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { getByText } = render(
      <LoginPage />,
    );

    expect(getByText('Login')).toBeInTheDocument();
  });
});
