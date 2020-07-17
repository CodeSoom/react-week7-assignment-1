import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LogoutPage from './LogoutPage';

import { logout } from '../actions';

jest.mock('react-redux');

describe('LogoutPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  describe('renders LogoutPage', () => {
    context('with accessToken', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders LogoutPage ', () => {
        const { container, queryByRole } = render(<LogoutPage />);

        expect(container).toHaveTextContent('LogOut 페이지');

        expect(queryByRole('button', { name: 'LogOut' })).toBeInTheDocument();
      });
    });

    // TODO : 로그아웃시, 메인화면으로 넘어가기 -> 시간 나면 구현하기!
    context('without accessToken', () => {
      given('accessToken', () => '');

      it('show LogOut message', () => {
        const { container } = render(<LogoutPage />);

        expect(container).toHaveTextContent('LogOut 되었습니다.');
      });
    });
  });

  context('when click [LogOut] button', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('occur a logout action', () => {
      const { getByRole } = render(<LogoutPage />);

      fireEvent.click(getByRole('button', { name: 'LogOut' }));

      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
