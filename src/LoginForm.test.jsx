import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginForm
        onSubmit={handleClick}
        onChange={handleChange}
      />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('login'));
    expect(handleClick).toBeCalled();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test@email.com' } });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'test@email.com',
    });

    fireEvent.change(getByLabelText('Password'), { target: { value: '1234' } });

    expect(handleChange).toBeCalledWith({
      name: 'password',
      value: '1234',
    });
  });
});
