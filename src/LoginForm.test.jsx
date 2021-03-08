import React from 'react';

import { fireEvent, queryByText, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderLoginForm() {
    return render(
      <LoginForm onChange={handleChange} onSubmit={handleSubmit} />,
    );
  }

  it('제목, E-mail입력창과 Password 입력창, Log In버튼을 보여준다.', () => {
    const { queryAllByText, queryByLabelText } = renderLoginForm();

    queryAllByText('Log In').forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(queryByLabelText('E-mail')).toBeInTheDocument();
    expect(queryByLabelText('Password')).toBeInTheDocument();
  });

  it('E-mail입력창과 Password 입력창에 입력을 하면 handleChange함수가 실행된다.', () => {
    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@naver.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    const { queryByLabelText } = renderLoginForm();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(queryByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('Log In 버튼을 누르면 handleSubmit함수가 실행된다.', () => {
    const { queryAllByText } = renderLoginForm();

    fireEvent.click(queryAllByText('Log In')[1]).toBeCalled();
  });
});
