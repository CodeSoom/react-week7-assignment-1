import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderLoginForm() {
    return render((
      <LoginForm
        onChange={handleChange}
      />
    ));
  }

  it('render input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when change input text', () => {
    it('should call handleChange', () => {
      const { getByLabelText } = renderLoginForm();

      const controls = [
        { label: 'E-mail', name: 'email', value: 'test@exam' },
        { label: 'Password', name: 'password', value: '1234' },
      ];

      controls.forEach(({ label, name, value }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, { target: { value } });
        expect(handleChange).toBeCalledWith({ name, value });
        handleChange.mockClear();
      });
    });
  });
});
