import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('아이디, 비밀번호 폼을 보여준다.', () => {
    const mockId = 'testId';
    const mockPw = 'testPw';
    const { getByLabelText, getByDisplayValue } = render(<LoginForm id={mockId} pw={mockPw} />);

    expect(getByLabelText(/아이디/)).not.toBeNull();
    expect(getByLabelText(/비밀번호/)).not.toBeNull();
    expect(getByDisplayValue(mockId)).not.toBeNull();
    expect(getByDisplayValue(mockPw)).not.toBeNull();
  });

  it('input 상태를 변경하는 경우 onChange함수를 실행한다.', () => {
    const mockId = 'testId';
    const mockPw = 'testPw';
    const onChange = jest.fn();
    const { getByLabelText } = render(<LoginForm onChange={onChange} />);

    const idInput = getByLabelText(/아이디/);
    const pwInput = getByLabelText(/비밀번호/);

    fireEvent.change(idInput, { target: { value: mockId } });
    expect(onChange).toBeCalledWith('id', mockId);

    fireEvent.change(pwInput, { target: { value: mockPw } });
    expect(onChange).toBeCalledWith('pw', mockPw);
  });
});
