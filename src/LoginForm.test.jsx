import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = ({ email, password, error }) => render((
    <LoginForm
      fields={{ email, password }}
      onSubmit={handleSubmit}
      onChange={handleChange}
      error={error}
    />
  ));

  context('without error', () => {
    const error = false;

    it('renders input controls', () => {
      const email = 'tester@example.com';
      const password = 'test';

      const { getByLabelText } = renderLoginForm({ email, password, error });

      const controls = [
        { label: 'E-mail', value: email },
        { label: 'Password', value: password },
      ];

      controls.forEach(({ label, value }) => {
        const input = getByLabelText(label);
        expect(input.value).toBe(value);
      });
    });

    it('listens change events', () => {
      const { getByLabelText } = renderLoginForm({ error });

      const controls = [
        { label: 'E-mail', name: 'email', value: 'testers@example.com' },
        { label: 'Password', name: 'password', value: 'tests' },
      ];

      controls.forEach(({ label, value, name }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, {
          target: { value, name },
        });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });

    it('renders "Log In" button', () => {
      const { getByText } = renderLoginForm({ error });

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });

    it("doesn't renders error message", () => {
      const { container } = renderLoginForm({ error });

      expect(container).not.toHaveTextContent('입력이 안된 사항이 있습니다.');
    });
  });

  context('with error', () => {
    const error = true;

    it('renders Error message', () => {
      const { getByText } = renderLoginForm({ error });

      expect(getByText('입력이 안된 사항이 있습니다.')).not.toBeNull();
    });
  });
});
