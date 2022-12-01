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
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  context('with params props', () => {
    const params = { id: '1' };

    const renderRestaurantPage = () => (
      render(
        <RestaurantPage params={params} />,

      ));

    it('renders name', () => {
      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('마법사주방');
    });

    it('리뷰 작성 form이 랜더링된다', () => {
      renderRestaurantPage();

      expect(screen.queryByLabelText('평점')).not.toBeNull();
      expect(screen.queryByLabelText('리뷰 내용')).not.toBeNull();
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
