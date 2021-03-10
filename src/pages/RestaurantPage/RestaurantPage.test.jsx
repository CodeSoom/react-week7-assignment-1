import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

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

  context('with params props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      render((
        <RestaurantPage params={params} />
      ));

      expect(screen.getByText('마법사주방')).toBeInTheDocument();
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>
      ));

      expect(screen.getByText('마법사주방')).toBeInTheDocument();
    });
  });
});
