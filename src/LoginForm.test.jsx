import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginForm
        onChange={handleChange}
      />
    ));

    const controls = [
      { label: 'Email', value: 'test@test.com' },
      { label: 'Password', value: '1234' },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalled();
    });
  });

  it('listens click event', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <LoginForm
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('Login'));

    expect(handleClick).toBeCalled();
  });
});
