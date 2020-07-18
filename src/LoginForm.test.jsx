import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders Login button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm
        onSubmit={handleSubmit}
      />
    ));

    fireEvent.click(getByText('Login'));

    expect(handleSubmit).toBeCalled();
  });
});
