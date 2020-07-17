import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '양천주가',
        address: '서울 강남구',
        reviews: [],
      },
      reviewField: {
        score: '',
        description: '',
      },
    }));
  });

  context('with params props', () => {
    beforeEach(() => {
      useSelector.mockImplementation((state) => state({
        restaurant: {
          id: 1,
          name: '양천주가',
          address: '서울 강남구',
          reviews: [],
        },
        reviewField: {
          score: '',
          description: '',
        },
      }));
    });

    it('renders name', () => {
      const params = { id: '1' };

      const { container } = render(
        <RestaurantPage params={params} />,
      );

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('without params props', () => {
    beforeEach(() => {
      useSelector.mockImplementation((state) => state({
        restaurant: {
          id: 1,
          name: '양천주가',
          address: '서울 강남구',
          reviews: [],
        },
        reviewField: {
          score: '',
          description: '',
        },
      }));
    });

    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('양천주가');
    });
  });
});
