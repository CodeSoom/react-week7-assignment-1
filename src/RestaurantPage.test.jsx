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
      accessToken: 'ACCESS_TOKEN',
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [
          {
            id: 1, restaurantId: 1, name: '테스터', score: 5, description: 'GOOD!',
          },
        ],
      },
      reviewFields: {
        score: '',
        description: '',
      },
    }));
  });

  context('with params props', () => {
    const renderRestaurantPage = (params) => render((
      <RestaurantPage params={params} />
    ));

    const params = { id: '1' };

    it('renders name', () => {
      const { container } = renderRestaurantPage(params);

      expect(container).toHaveTextContent('마법사주방');
    });

    it('renders review write form', () => {
      const { queryByLabelText } = renderRestaurantPage(params);

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders reviews name, score and description', () => {
      const { container } = renderRestaurantPage(params);

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('GOOD!');
      expect(container).toHaveTextContent('5');
    });
  });

  context('without params props', () => {
    const renderRestaurantPage = () => render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantPage />
      </MemoryRouter>
    ));

    it('renders name', () => {
      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('마법사주방');
    });

    it('renders review write form', () => {
      const { queryByLabelText } = renderRestaurantPage();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders reviews name, score and description', () => {
      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('GOOD!');
      expect(container).toHaveTextContent('5');
    });
  });
});
