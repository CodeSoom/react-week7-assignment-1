import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the login form', () => {
    const { getByLabelText } = render((
      <LoginPage />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('listens form fields change event', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginPage onChange={handleChange} />
    ));

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalled();
  });
});
