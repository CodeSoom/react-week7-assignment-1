import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';
import restaurant from '../fixtures/restaurant';
import reviewForm from '../fixtures/reviewForm';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant,
      reviewForm,
    }));
  });

  context('with params props', () => {
    const params = { id: '1' };

    it('renders name', () => {
      const { findByText } = render(
        <RestaurantPage params={params} />,
      );

      expect(findByText(/마법사주방/)).not.toBeNull();
    });

    it('리뷰 작성 폼을 보여준다.', () => {
      const { getByLabelText } = render(
        (<RestaurantPage params={params} />),
      );

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('이름')).not.toBeNull();
      expect(getByLabelText('후기')).not.toBeNull();
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      const { findByText } = render(
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>,
      );

      expect(findByText(/마법사주방/)).not.toBeNull();
    });
  });
});
