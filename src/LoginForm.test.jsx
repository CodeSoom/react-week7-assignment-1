import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  const renderLoginForm = () => render((
    <LoginForm
      fields={{ email: '', password: '' }}
      onChange={handleChange}
      onClickLogin={handleClick}
    />
  ));

  it('renders input controls', () => {
    const { queryByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail' },
      { label: 'Password' },
    ];

    controls.forEach(({ label }) => {
      expect(queryByLabelText(label)).not.toBeNull();
    });
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, value, name }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalled();
  });
});
