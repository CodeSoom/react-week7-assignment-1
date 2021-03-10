import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  it('제목, 이메일 입력창, 암호 입력창, 버튼을 보여줍니다.', () => {
    const { queryByText, queryByLabelText } = render(<LoginForm />);

    expect(queryByText(/Log in/)).not.toBeNull();

    expect(queryByLabelText(/E-mail/)).not.toBeNull();
    expect(queryByLabelText(/Password/)).not.toBeNull();

    expect(queryByText(/Login/)).not.toBeNull();
  });

  it('이메일, 암호 입력창에 값을 입력하면 입력값이 업데이트 됩니다.', () => {
    const { queryByLabelText } = render((<LoginForm onChange={handleChange} />));

    expect(handleChange).not.toBeCalled();

    fireEvent.change(queryByLabelText(/E-mail/), { target: { value: 'tester@example.com' } });

    expect(handleChange).toBeCalled();
  });
});
