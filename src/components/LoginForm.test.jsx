import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm() {
    return render((
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders email and password inputs and "Log In" button', () => {
    const { queryByLabelText, queryByRole } = renderLoginForm();

    expect(queryByLabelText('E-mail')).toBeInTheDocument();
    expect(queryByLabelText('Password')).toBeInTheDocument();

    expect(queryByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('types E-mail and Password input, calls onChanage handler', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'changed email' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'changed email',
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'changed password' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'password',
      value: 'changed password',
    });
  });

  it('clicks "Log In" button, calls onSubmit handler', () => {
    const { getByRole } = renderLoginForm();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });
});
