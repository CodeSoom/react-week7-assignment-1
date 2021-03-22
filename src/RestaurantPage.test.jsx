import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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
        reviews: [{
          id: 1,
          restaurantId: 1,
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        }],
      },
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  context('with params props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      const { container } = render(
        <RestaurantPage params={params} />,
      );

      expect(container).toHaveTextContent('마법사주방');
    });

    it('renders review write form', () => {
      const params = { id: '1' };

      const { queryByLabelText } = render(
        <RestaurantPage params={params} />,
      );

      expect(queryByLabelText('평점')).not.toBeNull();
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
