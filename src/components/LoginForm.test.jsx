import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  context('renders LoginForm', () => {
    const { getByLabelText, container } = render(<LoginForm />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(container.querySelector('button')).toHaveTextContent('Log In');
  });

  context('when click login button', () => {
    it('request login', () => {
      const { container } = renderLoginForm();

      fireEvent.click(container.querySelector('button'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when change the Email-Input-Value', () => {
    it('changed input value', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'test@test.com' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'email',
        value: 'test@test.com',
      });
    });
  });

  context('when change the Password-Input-Value', () => {
    it('changed input value', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('Password'), {
        target: { value: '1234' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'password',
        value: '1234',
      });
    });
  });
});
