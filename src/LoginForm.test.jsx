import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('제목, 이메일 입력창, 암호 입력창, 버튼을 보여줍니다.', () => {
    const { queryByText, queryByLabelText } = render(<LoginForm />);

    expect(queryByText(/Log in/)).not.toBeNull();

    expect(queryByLabelText(/E-mail/)).not.toBeNull();
    expect(queryByLabelText(/Password/)).not.toBeNull();

    expect(queryByText(/Login/)).not.toBeNull();
  });

  it('이메일, 암호 입력창에 값을 입력하면 입력값이 업데이트 됩니다.', () => {
    const handleChange = jest.fn();

    const { queryByLabelText } = render((<LoginForm onChange={handleChange} />));

    fireEvent.change(queryByLabelText(/E-mail/), { target: { value: 'tester@example.com' } });

    expect(handleChange).toBeCalled();

    fireEvent.change(queryByLabelText(/Password/), { target: { value: 'thisispassword123' } });

    expect(handleChange).toBeCalled();
  });

  it('로그인하는 버튼을 눌러 아이디와 비밀번호를 제출합니다.', () => {
    const handleSubmit = jest.fn();

    const { queryByText } = render((<LoginForm onSubmit={handleSubmit} />));

    fireEvent.click(queryByText(/Login/));

    expect(handleSubmit).toBeCalled();
  });
});
