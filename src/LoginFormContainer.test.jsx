import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: given.accessToken,
    errorMessage: given.errorMessage,
  }));

  const renderLoginFormContainer = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginFormContainer />
    </MemoryRouter>,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged-in', () => {
    given('accessToken', () => 'TOKEN');

    it('renders title', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('Log Out');
    });

    it('calls dispatch', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });

  context('when logged-out', () => {
    given('accessToken', () => '');

    it('renders title', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('Log In');
    });

    it('renders login form', () => {
      const { queryByLabelText } = renderLoginFormContainer();

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();
    });

    it('calls dispatch', () => {
      const { getByText, getByLabelText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

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

  context('when the error is thrown', () => {
    given('errorMessage', () => 'Error');

    it('renders the error message', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('Error');
    });
  });
});
