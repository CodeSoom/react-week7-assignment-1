import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginForm = () => render(
    <LoginForm onSubmit={handleSubmit} />,
  );

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('Password - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('login - button이 렌더링된다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });

  it('change 이벤트를 listen 한다', () => {
    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    const controls = [
      { label: 'E-mail', name: 'email', value: 'minsuk@gmail.com' },
      { label: 'Password', name: 'password', value: '123123' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });
});
