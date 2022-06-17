import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DetailContainer from './DetailContainer';

describe('DetailContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  context('with loading', () => {
    it('renders "로딩중..."', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurantDetail: {
          isLoading: true,
        },
        auth: {
          isLogin: true,
        },
        reviewFields: {
          score: 0,
          description: '',
        },
      }));
      const { queryByText } = render((
        <DetailContainer />
      ));
      expect(queryByText('로딩중...')).toBeInTheDocument();
    });
  });

  context('with error', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: {
        isError: true,
        errorMessage: '에러가 발생했습니다.',
      },
      auth: {
        isLogin: true,
      },
      reviewFields: {
        score: 0,
        description: '',
      },
    }));
    const { queryByText } = render((
      <DetailContainer />
    ));
    expect(queryByText('에러: 에러가 발생했습니다.')).toBeInTheDocument();
  });

  context('with details', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurantDetail: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          menuItems: [
            {
              id: 1,
              restaurantId: 1,
              name: '탕수육',
            },
          ],
        },
      },
      auth: {
        isLogin: true,
      },
      reviewFields: {
        score: 0,
        description: '',
      },
    }));

    const { queryByText } = render((
      <DetailContainer />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('탕수육')).not.toBeNull();
  });
});
