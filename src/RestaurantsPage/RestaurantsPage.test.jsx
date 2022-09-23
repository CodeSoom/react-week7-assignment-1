import { useNavigate, MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  const navigate = jest.fn();

  beforeEach(() => {
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

    useNavigate.mockImplementation(() => navigate);
  });

  afterEach(() => {
    dispatch.mockClear();
    navigate.mockClear();
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  context('when click restaurant', () => {
    it('occurs handle event', () => {
      const { getByText } = renderRestaurantsPage();

      fireEvent.click(getByText('마법사주방'));

      expect(navigate).toBeCalled();
    });
  });
});
