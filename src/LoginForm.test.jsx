import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const email = 'test@email.com';
  const password = 'test';

  const control = [
    {
      label: 'E-mail',
      name: 'email',
      previous: email,
      value: 'tester@example.com',
    },
    {
      label: 'Password',
      name: 'password',
      previous: password,
      value: 'test',
    },
  ];

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();
  });

  const rendersLoginForm = () => render(
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      userfields={{ email, password }}
    />,
  );

  // 아이디, 패스워드 인풋이 보여야한다.
  it('renders input controls', () => {
    const { queryByLabelText } = rendersLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  // 로그인 버튼 클릭 시 handleSubmit 함수가 실행되어야 한다.
  it('renders login button', () => {
    const { queryByText } = rendersLoginForm();

    fireEvent.click(queryByText('Login'));

    expect(handleSubmit).toBeCalled();
  });

  // 인풋에 텍스트 입력시 handlechange 이벤트가 실행되어야 한다.
  it('called handleChange', () => {
    const { queryByLabelText } = rendersLoginForm();

    control.forEach(({ label, name, value }) => {
      const input = queryByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { name, value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  // 인풋의 이전 값과 나중 값을 비교한다.
  it('compare the previous value with the later value', () => {
    const { queryByLabelText } = rendersLoginForm();

    control.forEach(({
      label, previous,
    }) => {
      const input = queryByLabelText(label);

      expect(input.value).toBe(previous);
    });
  });
});
