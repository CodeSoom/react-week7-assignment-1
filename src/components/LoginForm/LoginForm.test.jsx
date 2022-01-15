import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('아이디, 비밀번호 폼을 보여준다.', () => {
    const id = 'testId';
    const pw = 'testPw';
    const { getByLabelText, getByDisplayValue } = render(<LoginForm id={id} pw={pw} />);

    expect(getByLabelText(/아이디/)).not.toBeNull();
    expect(getByLabelText(/비밀번호/)).not.toBeNull();
    expect(getByDisplayValue(id)).not.toBeNull();
    expect(getByDisplayValue(pw)).not.toBeNull();
  });

  it('input 상태를 변경하는 경우 onChange함수를 실행한다.', () => {
    const id = 'testId';
    const pw = 'testPw';
    const onChange = jest.fn();
    const { getByLabelText } = render(<LoginForm onChange={onChange} />);

    const idInput = getByLabelText(/아이디/);
    const pwInput = getByLabelText(/비밀번호/);

    fireEvent.change(idInput, { target: { value: id } });
    expect(onChange).toBeCalledWith('id', id);

    fireEvent.change(pwInput, { target: { value: pw } });
    expect(onChange).toBeCalledWith('pw', pw);
  });

  it('로그인 버튼을 누른 경우 onSubmit함수를 실행한다.', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<LoginForm onSubmit={onSubmit} />);
    fireEvent.click(getByText('로그인'));
    expect(onSubmit).toBeCalled();
  });
});
