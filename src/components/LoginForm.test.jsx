import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderLoginForm = () => (
    render(<LoginForm onChange={handleChange} onSubmit={handleSubmit} />)
  );

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('화면에 로그인 입력 폼이 존재한다.', () => {
    const { getByText, getByRole, getByLabelText } = renderLoginForm();

    expect(getByRole('textbox', { name: '이메일' })).not.toBeNull();
    expect(getByLabelText('패스워드', { selector: 'input' })).not.toBeNull();
    expect(getByText('로그인')).not.toBeNull();
  });

  it('폼에 텍스트를 입력하면 onChange 핸들러가 실행된다.', () => {
    const { getByLabelText } = renderLoginForm();

    const labelTexts = ['이메일', '패스워드'];

    labelTexts.forEach((text) => {
      fireEvent.change(getByLabelText(text, { selector: 'input' }), { target: { value: '테스트' } });

      expect(handleChange).toBeCalled();
    });

    expect(handleChange).toBeCalledTimes(2);
  });

  it('"로그인" 버튼을 클릭하면 onSubmit 핸들러가 실행된다.', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('로그인'));
    expect(handleSubmit).toBeCalled();
  });
});
