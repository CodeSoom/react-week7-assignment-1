import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  const renderLoginForm = ({ email, password }) => render(
    <LoginForm
      fields={{ email, password }}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />,
  );

  const email = 'test@test.com';
  const password = '1234';

  const controls = [{
    label: 'E-mail',
    name: 'email',
    origin: email,
    value: 'test@test.com',
  },
  {
    label: 'Password',
    name: 'password',
    origin: password,
    value: 'test',

  },
  ];

  it('타이틀이 보임', () => {
    const { container } = renderLoginForm({});

    expect(container).toHaveTextContent('Log In');
  });

  it('input 입력 하면 handleChange 호출', () => {
    const { getByLabelText } = renderLoginForm({ email, password });

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('버튼이 눌리면 dispatch 호출', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
