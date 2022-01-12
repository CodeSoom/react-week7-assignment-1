// 관심사: 로그인 폼을 화면에 나타내기
import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => render((
    <LoginForm
      onClick={handleClick}
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Submit" button to call onClick event', () => {
    const { getByText } = renderLoginForm();

    expect(getByText('Submit')).toBeInTheDocument();

    fireEvent.click(getByText('Submit'));

    expect(handleClick).toBeCalled();
  });

  it('renders "E-mail, Password" input to call onChange event', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();

    fireEvent.change(getByLabelText('E-mail'), {
      target: {
        name: 'email',
        value: 'test@mail',
      },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: {
        name: 'password',
        value: '123',
      },
    });

    expect(handleChange).toBeCalled();
  });
});
