import { render, fireEvent, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const mockSelector = ({ isLogin, isLoading, isError }) => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
      auth: {
        isLogin,
        isLoading,
        isError,
        errorMessage: '',
      },
    }));
  };

  const renderWithContext = ({ isLogin, isLoading, isError }) => {
    mockSelector({ isLogin, isLoading, isError });
    return render((
      <LoginFormContainer />
    ));
  };

  context('when isLogin is true', () => {
    it('renders Logout', () => {
      renderWithContext({ isLogin: true, isLoading: false, isError: false });

      expect(screen.getByRole('button')).toHaveTextContent('Log out');
    });
  });

  context('when the form is submitted', () => {
    it('calls the dispatch function', () => {
      renderWithContext({ isLogin: false, isLoading: false, isError: false });

      const loginButton = screen.getByRole('button');

      fireEvent.click(loginButton);

      expect(dispatch).toBeCalled();

      expect(loginButton).toHaveTextContent('Log In');
    });
  });

  context('when textbox is changed', () => {
    it('calls the dispatch function', () => {
      renderWithContext({ isLogin: false, isLoading: false, isError: false });

      fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'tester@example.com' } });

      expect(dispatch).toBeCalled();

      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });
  });

  context('with loading', () => {
    it('renders "로딩중..."', () => {
      renderWithContext({ isLogin: false, isLoading: true, isError: false });

      expect(screen.queryByText('로딩중...')).toBeInTheDocument();
    });
  });

  context('with error', () => {
    it('renders error message', () => {
      renderWithContext({ isLogin: false, isLoading: false, isError: true });

      expect(screen.queryByText('에러:')).toBeInTheDocument();
    });
  });
});
