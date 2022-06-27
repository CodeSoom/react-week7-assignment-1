import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [
        { id: 1, name: '서울' },
      ],
    },
    categories: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [
        { id: 1, name: '한식' },
      ],
    },
    restaurants: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [
        { id: 1, name: '마법사주방' },
      ],
    },
  }));

  const { queryByText } = render((
    <MemoryRouter>
      <Restaurants />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
});
