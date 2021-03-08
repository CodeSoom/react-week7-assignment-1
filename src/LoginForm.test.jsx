import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders login form', () => {
    const handleClick = jest.fn();

    const { getByLabelText, getByText } = render((
      <LoginForm
        onClick={handleClick}
      />
    ));

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalled();
  });
});
