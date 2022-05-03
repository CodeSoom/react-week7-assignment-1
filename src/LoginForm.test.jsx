import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onChange = jest.fn();

  const renderLoginForm = render((
    <LoginForm onChange={onChange} />
  ));

  it('renders login form', () => {
    const { queryByLabelText } = render(<LoginForm />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens for change event', () => {
    const { getByLabelText } = render(<LoginForm />);

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'tester' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { tartget: { value } },
      );

      expect(onChange).toBeCalledWith({
        target: { name, label },
      });
    });
  });
});
