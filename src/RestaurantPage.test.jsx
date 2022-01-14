import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const renderRestaurantPage = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <RestaurantPage />
    </MemoryRouter>
  ));

  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
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
  });

  context('without params props', () => {
    it('renders name', () => {
      const { container } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(container).toHaveTextContent('마법사주방');
    });

    it('renders input with "평점" label', () => {
      const { queryByLabelText } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders input with "리뷰 내용" label', () => {
      const { queryByLabelText } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "리뷰 남기기" button ', () => {
      const { queryAllByText } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(queryAllByText('리뷰 남기기')).not.toBeNull();
    });
  });
});
