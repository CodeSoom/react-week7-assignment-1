import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  given('restaurants', () => ([
    { id: 1, name: '마법사주방' },
  ]));

  const handleClick = jest.fn();

  const { container, getByText } = render(
    <Restaurants
      restaurants={given.restaurants}
      onClick={handleClick}
    />,
  );

  expect(container).toHaveTextContent('마법사주방');

  fireEvent.click(getByText('마법사주방'));

  expect(handleClick).toBeCalledWith({ id: 1, name: '마법사주방' });
});
