import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  function renderLoginForm() {
    return render((
      <LoginForm
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders login form', () => {
    const { getByLabelText, getByText } = renderLoginForm();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalled();
  });

  it('listens to input change events', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test@test.com' },
    });

    expect(handleChange).toBeCalled();
  });
});
