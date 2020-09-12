import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm({ email, password, error } = { email: '', password: '', error: false }) {
    return render(
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        fields={{ email, password }}
        error={error}
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
    it('called login button click event', () => {
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

  context('when login fail', () => {
    it('renders error message', () => {
      const { getByText } = renderLoginForm({ email: '', password: '', error: true });

      expect(getByText(/로그인에 실패하였습니다/)).not.toBeNull();
    });
  });
});
