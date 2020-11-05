import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  const handleChange = jest.fn();

  const renderLoginPage = () => render((
    <LoginPage
      email="test@test.com"
      password="test"
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    handleChange.mockClear();
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
    expect(getByLabelText('E-mail')).toHaveValue('test@test.com');
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Password')).toHaveValue('test');
  });

  it('renders log in button', () => {
    // When
    const { getByRole } = renderLoginPage();

    // Then
    expect(getByRole('button')).toHaveTextContent('Log In');
  });

  it('call onChange', () => {
    const { getAllByRole } = renderLoginPage();

    const inputs = getAllByRole('textbox');
    inputs.forEach((input) => {
      fireEvent.change(input, {
        target: { value: '인풋 작성' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
