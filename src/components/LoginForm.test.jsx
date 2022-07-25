import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  const renderLoginForm = ({ email, password } = {}) => render(
    <MemoryRouter>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        fields={{ email, password }}
      />
    </MemoryRouter>,
  );

  const email = 'test@test';
  const password = '1234';

  const controls = [
    {
      label: 'E-mail',
      name: 'email',
      userInfo: email,
      value: 'tester@example.com',
    },
    {
      label: 'Password',
      name: 'password',
      userInfo: password,
      value: 'test',
    },
  ];

  it('input에 입력하면 change event가 일어납니다.', () => {
    const { getByLabelText } = renderLoginForm({ email, password });

    controls.forEach(({
      label, name, value, userInfo,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(userInfo);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('Log In버튼을 누르면 handleSubmit이 호출됩니다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
