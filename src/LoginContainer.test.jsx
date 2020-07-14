import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginContainer from './LoginContainer';

const renderLoginContainer = () => render(<LoginContainer />);

describe('LoginContainer', () => {
  it('이메일과 비밀번호 폼이 있다.', () => {
    const { getByLabelText } = renderLoginContainer();

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('이메일과 비밀번호가 변경된다.', () => {
    const fields = [
      {
        label: 'Email',
        value: 'test@test.com',
      },
      {
        label: 'Password',
        value: '1234',
      },
    ];

    const { getByLabelText } = renderLoginContainer();

    fields.forEach((field) => {
      const { label, value } = field;
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(input.value).toBe(value);
    });
  });
});
