import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  const handleChange = jest.fn();

  it('renders email and password fields', () => {
    // When
    const { getByLabelText } = render((
      <LoginPage
        email="test@test.com"
        password="test"
        onChange={handleChange}
      />
    ));

    // Then
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('E-mail')).toHaveValue('test@test.com');
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Password')).toHaveValue('test');
  });

  it('renders log in button', () => {
    // When
    const { getByRole } = render(<LoginPage />);

    // Then
    expect(getByRole('button')).toHaveTextContent('Log In');
  });

  it('call onChange', () => {
    const { getAllByRole } = render(<LoginPage onChange={handleChange} />);

    const inputs = getAllByRole('textbox');
    inputs.forEach((input) => {
      fireEvent.change(input, {
        target: { value: '인풋 작성' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
