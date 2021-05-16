import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <LoginPage />,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log in');
  });

  it('label, input, button 그려준다.', () => {
    const { queryByLabelText, queryByText } = renderLoginPage();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
    expect(queryByText('Log In')).not.toBeNull();
  });
});
