import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

import restaurant from '../../fixtures/restaurant';

describe('RestaurantPage', () => {
  const reviewField = {
    score: '',
    description: '',
  };

  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant,
      reviewField,
    }));
  });

  context('with params props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      const { container } = render(
        <RestaurantPage params={params} />,
      );

      expect(container).toHaveTextContent('양천주가');
    });
  });

  context('without params props', () => {
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
