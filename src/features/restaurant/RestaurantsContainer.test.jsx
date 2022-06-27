import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  context('with loading', () => {
    it('renders "로딩중..."', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: {
          isLoading: true,
        },
      }));
      const { queryByText } = render((
        <MemoryRouter>
          <RestaurantsContainer />
        </MemoryRouter>
      ));
      expect(queryByText('로딩중...')).toBeInTheDocument();
    });
  });

  context('with error', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: {
        isError: true,
        errorMessage: '에러가 발생했습니다.',
      },
    }));
    const { queryByText } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));
    expect(queryByText('에러: 에러가 발생했습니다.')).toBeInTheDocument();
  });

  context('with details', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [
          { id: 1, name: '마법사주방' },
        ],
      },
    }));

    const { container } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});

test('RestaurantsContainer', () => {

});
