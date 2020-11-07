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
      },
      accessToken: given.accessToken,
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

  describe('review', () => {
    context('with login', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review write form', () => {
        const { getByLabelText } = render((
          <MemoryRouter initialEntries={['/restaurants/1']}>
            <RestaurantPage />
          </MemoryRouter>
        ));

        expect(getByLabelText('평점')).not.toBeNull();
        expect(getByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('renders review form', () => {
        const { container } = render((
          <MemoryRouter initialEntries={['/restaurants/1']}>
            <RestaurantPage />
          </MemoryRouter>
        ));

        expect(container).toHaveTextContent('평점');
        expect(container).toHaveTextContent('리뷰 내용');
      });
    });

    context('without logout', () => {
      given('accessToken', () => null);

      it('no renders review form', () => {
        const { container } = render((
          <MemoryRouter initialEntries={['/restaurants/1']}>
            <RestaurantPage />
          </MemoryRouter>
        ));

        expect(container).not.toHaveTextContent('평점');
        expect(container).not.toHaveTextContent('리뷰 내용');
      });
    });
  });
});
