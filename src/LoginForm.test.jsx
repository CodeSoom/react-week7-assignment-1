import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderLoginForm({ email, password }) {
    return render((
      <LoginForm
        fields={{ email, password }}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    ));
  }

  it('input control이 보이고, 이벤트 변화를 탐지합니다.', () => {
    const email = 'test@example.com';
    const password = '123123';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        origin: email,
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: password,
        value: '123123',
      },
    ];

    controls.forEach(({
      label,
      origin,
      value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      // TODO
      expect(onChange).toBeCalled();
    });
  });

  it('로그인 버튼이 보입니다.', () => {
    const email = '';
    const password = '';
    const { getByText } = renderLoginForm({ email, password });

    expect(getByText('Log In')).not.toBeNull();
  });
});
