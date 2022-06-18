import { render, fireEvent, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const mockSelector = (isLoggedIn) => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
      auth: {
        isLogin: isLoggedIn,
        isLoading: false,
        isError: false,
        errorMessage: '',
      },
    }));
  };

  const renderWithContext = (isLoggedIn) => {
    mockSelector(isLoggedIn);
    return render((
      <LoginFormContainer />
    ));
  };

  context('when isLogin is true', () => {
    it('renders Logout', () => {
      renderWithContext(true);

      expect(screen.getByRole('button')).toHaveTextContent('로그아웃');
    });
  });

  context('when the form is submitted', () => {
    it('calls the dispatch function', () => {
      renderWithContext(false);

      const loginButton = screen.getByRole('button');

      fireEvent.click(loginButton);

      expect(dispatch).toBeCalled();

      expect(loginButton).toHaveTextContent('Login');
    });
  });

  context('when textbox is changed', () => {
    it('calls the dispatch function', () => {
      renderWithContext(false);

      fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'tester@example.com' } });

      expect(dispatch).toBeCalled();

      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });
  });
});
