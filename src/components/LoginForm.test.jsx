import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm({ email, password } = { email: '', password: '' }) {
    return render(
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        fields={{ email, password }}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  context('renders LoginForm', () => {
    const { getByLabelText, container } = renderLoginForm();

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

  context('when change the input value', () => {
    it('changed input value', () => {
      const { getByLabelText } = renderLoginForm({ email: '', password: '' });

      const controls = [
        {
          label: 'E-mail', name: 'email', previous: '', value: 'test@test.com',
        },
        {
          label: 'Password', name: 'password', previous: '', value: '1234',
        },
      ];

      controls.forEach(({
        label, name, previous, value,
      }) => {
        const labelText = getByLabelText(label);

        expect(labelText.value).toBe(previous);

        fireEvent.change(labelText, {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({
          name,
          value,
        });
      });
    });
  });
});
