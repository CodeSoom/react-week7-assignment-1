import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({ email, password } = {}) {
    return render((
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('render input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('render "Log In" button', () => {
    const { getByText } = renderLoginForm();

    expect(getByText('Log In')).toHaveAttribute('type', 'button');
  });

  context('when click "Log In" button', () => {
    it('should called handleSubmit', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when change input text', () => {
    it('should call handleChange', () => {
      const email = 'test';
      const password = '12';

      const { getByLabelText } = renderLoginForm({ email, password });

      const controls = [
        {
          label: 'E-mail',
          name: 'email',
          origin: email,
          value: 'test@exam',
        },
        {
          label: 'Password',
          name: 'password',
          origin: password,
          value: '1234',
        },
      ];

      controls.forEach(({
        label, name, origin, value,
      }) => {
        const input = getByLabelText(label);
        expect(input.value).toBe(origin);

        fireEvent.change(input, { target: { value } });
        expect(handleChange).toBeCalledWith({ name, value });
        handleChange.mockClear();
      });
    });
  });
});
