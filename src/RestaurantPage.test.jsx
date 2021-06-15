import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import given from 'given2';

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

      form: {
        score: 'score',
        description: 'description',
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

  context('with logged in', () => {
    given('accessToken', () => 'TOKEN');

    it('renders review form', () => {
      const { getAllByRole } = render(
        <RestaurantPage params={{ id: 1 }} />,
      );

      expect(getAllByRole('textbox')).toHaveLength(2);
    });
  });

  context('with logged in', () => {
    given('accessToken', () => null);

    it("doesn't renders review form", () => {
      const { queryByRole } = render(
        <RestaurantPage params={{ id: 1 }} />,
      );

      expect(queryByRole('textbox')).not.toBeInTheDocument();
    });
  });
});
