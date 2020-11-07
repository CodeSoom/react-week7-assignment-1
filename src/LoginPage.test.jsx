import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  const handleChange = jest.fn();

  const renderLoginPage = () => render((
    <LoginPage />
  ));

  beforeEach(() => {
    handleChange.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders heading', () => {
    const { getByRole } = renderLoginPage();

    expect(getByRole('heading')).toHaveTextContent('Log In');
  });

  it('renders email and password fields', () => {
    // When
    const { getByLabelText } = renderLoginPage();

    // Then
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders log in button', () => {
    // When
    const { getByRole } = renderLoginPage();

    // Then
    expect(getByRole('button')).toHaveTextContent('Log In');
  });
});
