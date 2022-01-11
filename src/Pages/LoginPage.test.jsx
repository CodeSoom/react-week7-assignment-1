import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(<LoginPage />);
  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login 페이지');
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('Username')).not.toBeNull();
  });
});
