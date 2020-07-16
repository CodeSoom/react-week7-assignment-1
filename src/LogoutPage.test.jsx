import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LogoutPage from './LogoutPage';

jest.mock('react-redux');

describe('LogoutPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('renders LogoutPage', () => {
    context('with accessToken', () => {
      beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
          accessToken: 'ACCESS_TOKEN',
        }));
      });

      it('renders LogoutPage ', () => {
        const { container, queryByRole } = render(<LogoutPage />);

        expect(container).toHaveTextContent('LogOut 페이지');

        expect(queryByRole('button', { name: 'LogOut' })).toBeInTheDocument();
      });
    });

    // TODO : 로그아웃시, 메인화면으로 넘어가기
    context('without accessToken', () => {
      beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
          accessToken: '',
        }));
      });

      it('show LogOut message', () => {
        const { container } = render(<LogoutPage />);

        expect(container).toHaveTextContent('LogOut 되었습니다.'); // 임시
      });
    });
  });

  context('when click [LogOut] button', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'ACCESS_TOKEN',
      }));
    });

    it('occur a logout action', () => {
      const { getByRole } = render(<LogoutPage />);

      fireEvent.click(getByRole('button', { name: 'LogOut' }));

      expect(dispatch).toBeCalledWith({
        type: 'logout',
        payload: { accessToken: '' },
      });
    });
  });
});
