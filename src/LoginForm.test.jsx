import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const renderLoginForm = () => render((
    <LoginForm onChange={onChange} onSubmit={onSubmit} />
  ));

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens for change events', () => {
    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'tester' },
    ];

    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { value } },
      );

      expect(onChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "log in" button', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('log in');
  });

  it('listens for click event on submit', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('log in'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
