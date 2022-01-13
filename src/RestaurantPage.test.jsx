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
  });

  // ToDo without reviews
  context('with review', () => {
    it('renders input with "평점" label', () => {
      const { queryByLabelText } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders input with "리뷰" label', () => {
      const { queryByLabelText } = renderRestaurantPage({
        path: '/restaurants/1',
      });

      expect(queryByLabelText('리뷰')).not.toBeNull();
    });
  });
});
