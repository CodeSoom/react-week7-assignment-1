import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      },
    }));
  });

  it('renders review write form', () => {
    const params = { id: '1' };

    const { container } = render(
      <RestaurantPage params={params} />,
    );

    expect(container).toHaveTextContent('리뷰');
  });
});
