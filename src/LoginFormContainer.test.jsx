import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderLoginPage = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginPage />
    </MemoryRouter>,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginPage();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('calls dispatch', () => {
    const { getByText, getByLabelText } = renderLoginPage();

    fireEvent.click(getByText('login'));

    expect(dispatch).toBeCalled();

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test@email.com' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: {
        loginFields: {
          name: 'email',
          value: 'test@email.com',
        },
      },
    });
  });
});
