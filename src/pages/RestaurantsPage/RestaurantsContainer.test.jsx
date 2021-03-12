import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const handleClick = jest.fn();

  render(<RestaurantsContainer onClickRestaurant={handleClick} />);

  expect(screen.getByText('마법사주방')).toBeInTheDocument();

  fireEvent.click(screen.getByText('마법사주방'));

  expect(handleClick).toBeCalledWith({ id: 1, name: '마법사주방' });
});
