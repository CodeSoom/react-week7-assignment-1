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
        reviews: [
          {
            id: 1, name: '테스트', score: '5', description: '정말 최고!',
          },
        ],
      },
      reviewField: {
        score: '',
        description: '',
      },
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

  it('renders review write form', () => {
    const params = { id: '1' };

    const { queryByText } = render(
      <RestaurantPage params={params} />,
    );

    expect(queryByText('평점')).not.toBeNull();
    expect(queryByText('리뷰 내용')).not.toBeNull();
  });
});
