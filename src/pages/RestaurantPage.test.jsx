import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantsPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
      },
    }));
  });
  it('renders restaurant', () => {
    // GET /restaurants/1
    const params = { id: 1 };
    const { container } = render(<RestaurantPage params={params} />);

    expect(container).toHaveTextContent('마법사주방');
  });
});
