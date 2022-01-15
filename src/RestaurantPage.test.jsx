import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';
import restaurant from '../fixtures/restaurant';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant,
    }));
  });

  context('with params props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      const { findByText } = render(
        <RestaurantPage params={params} />,
      );

      expect(findByText(/마법사주방/)).not.toBeNull();
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      const { findByText } = render(
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>,
      );

      expect(findByText(/마법사주방/)).not.toBeNull();
    });
  });
});
