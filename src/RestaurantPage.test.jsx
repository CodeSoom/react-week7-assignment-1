import React from 'react';

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
      reviewFields: {
        score: '5',
        description: '최고의 맛!',
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

    it('nothing renders if undefined restaurant id', () => {
      const params = { id: 'undefined' };

      render(<RestaurantPage params={params} />);
      // *TODO: render error message
    });
  });
});
