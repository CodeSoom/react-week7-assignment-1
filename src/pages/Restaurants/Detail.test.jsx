import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Detail from './Detail';

test('Detail', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

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
    reviews: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [
        {
          id: 1, name: '마법사주방', score: 5, description: '맛있어요',
        },
      ],
    },
  }));

  const { queryByText } = render((
    <Detail />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('양천주가')).not.toBeNull();
  expect(queryByText('탕수육')).not.toBeNull();
});
