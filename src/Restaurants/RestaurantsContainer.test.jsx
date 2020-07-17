import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '양천주가' },
    ],
  }));

  const handleClick = jest.fn();

  const { container, getByText } = render(
    <RestaurantsContainer onClickRestaurant={handleClick} />,
  );

  expect(container).toHaveTextContent('양천주가');

  fireEvent.click(getByText('양천주가'));

  expect(handleClick).toBeCalledWith({ id: 1, name: '양천주가' });
});
