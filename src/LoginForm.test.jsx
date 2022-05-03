import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = (fields) => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginForm
        fields={fields}
        onSubmit={handleClick}
        onChange={handleChange}
      />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginForm({});

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const loginFields = {
      email: 'test@example.com',
      password: '1234',
    };

    const { queryByLabelText } = renderLoginForm(loginFields);

    expect(queryByLabelText('E-mail').value).toBe('test@example.com');
    expect(queryByLabelText('Password').value).toBe('1234');
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));
    expect(handleClick).toBeCalled();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm({});

    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@email.com' },
      { label: 'Password', name: 'password', value: '1234' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });
});
