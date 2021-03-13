import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(screen.queryByText('서울')).not.toBeNull();
    expect(screen.queryByText('한식')).not.toBeNull();
  });

  context('when click restaurant', () => {
    it('occurs handle event', () => {
      renderRestaurantsPage();

      fireEvent.click(screen.getByText('마법사주방'));

      expect(mockPush).toBeCalledWith('/restaurants/1');
    });
  });
});
