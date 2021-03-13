import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderLoginForm({ loginInputs }) {
    return render((
      <LoginForm
        loginInputs={loginInputs}
        onChange={handleChange}
        onClick={handleClick}
      />));
  }

  it('제목, 이메일 입력창, 암호 입력창, 버튼을 보여줍니다.', () => {
    const initialInputs = {
      email: '',
      password: '',
    };

    const { queryByText, queryByLabelText } = renderLoginForm({ loginInputs: initialInputs });

    const initialData = [
      { label: 'E-mail', value: initialInputs.email },
      { label: 'Password', value: initialInputs.password },
    ];

    initialData.forEach(({ label, value }) => {
      const currentLabel = queryByLabelText(label);
      expect(currentLabel).not.toBeNull();
      expect(currentLabel.value).toBe(value);
    });

    expect(queryByText(/Login/)).not.toBeNull();
  });

  it('이메일, 암호의 초치값을 render합니다.', () => {
    const initialInputs = {
      email: 'initialEmail@example.com',
      password: 'initialPassword123',
    };

    const { queryByLabelText } = renderLoginForm({ loginInputs: initialInputs });

    const initialData = [
      { label: 'E-mail', value: initialInputs.email },
      { label: 'Password', value: initialInputs.password },
    ];

    initialData.forEach(({ label, value }) => {
      expect(queryByLabelText(label).value).toBe(value);
    });
  });

  it('이메일, 암호 입력창에 값을 입력하면 입력값이 업데이트 됩니다.', () => {
    const initialInputs = {
      email: 'initialEmail@example.com',
      password: 'initialPassword123',
    };

    const { queryByLabelText } = renderLoginForm({ loginInputs: initialInputs });

    const currentData = [
      { label: 'E-mail', name: 'email', value: 'currentEmail@example.com' },
      { label: 'Password', name: 'password', value: 'currentPassword123' },
    ];

    currentData.forEach(({ label, name, value }) => {
      fireEvent.change(queryByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('로그인하는 버튼을 눌러 아이디와 비밀번호를 제출합니다.', () => {
    const initialInputs = {
      email: '',
      password: '',
    };

    const { queryByText, queryByLabelText } = renderLoginForm({ loginInputs: initialInputs });

    fireEvent.click(queryByText(/Login/));

    expect(handleClick).toBeCalled();

    const initialData = [
      { label: 'E-mail', value: initialInputs.email },
      { label: 'Password', value: initialInputs.password },
    ];

    initialData.forEach(({ label, value }) => {
      expect(queryByLabelText(label).value).toBe(value);
    });
  });
});
