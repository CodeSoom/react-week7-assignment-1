import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const hadleClick = jest.fn();

  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginForm onClick={hadleClick} />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { getByText } = render(<LoginForm onClick={hadleClick} />);

    fireEvent.click(getByText('로그인'));

    expect(hadleClick).toBeCalled();
  });
});
