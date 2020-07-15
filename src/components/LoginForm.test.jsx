import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  context('renders LoginForm', () => {
    const { getByLabelText, container } = render(<LoginForm />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(container.querySelector('button')).toHaveTextContent('Log In');
  });

  context('when click login button', () => {
    it('request login', () => {
      const handleSubmit = jest.fn();

      const { container } = render(<LoginForm onSubmit={handleSubmit} />);

      fireEvent.click(container.querySelector('button'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
