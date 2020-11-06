import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      accessToken: given.accessToken,
      reviewFields: given.reviewFields,
    }));
  });

  context('without logged-in', () => {
    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    it('renders no review write form', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('with logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    context('with review input form value', () => {
      given('reviewFields', () => ({
        score: '5',
        description: 'GOOD!',
      }));
      context('with reviews', () => {
        given('restaurant', () => ({
          id: 1,
          name: '마법사주방',
          address: '서울시 강남구',
          reviews: [
            {
              id: 1, restaurantId: 1, name: '테스터', score: 5, description: 'GOOD!',
            },
          ],
        }));

        it('renders name and address', () => {
          const { container } = renderRestaurantContainer();

          expect(container).toHaveTextContent('마법사주방');
          expect(container).toHaveTextContent('서울시');
        });

        it('renders reviews name, score and description', () => {
          const { container } = renderRestaurantContainer();

          expect(container).toHaveTextContent('테스터');
          expect(container).toHaveTextContent('GOOD!');
          expect(container).toHaveTextContent('5');
        });

        it('renders review write form', () => {
          const { queryByLabelText } = renderRestaurantContainer();

          expect(queryByLabelText('평점')).not.toBeNull();
          expect(queryByLabelText('리뷰 내용')).not.toBeNull();
        });

        it('change review write input', () => {
          const { getByLabelText } = renderRestaurantContainer();

          const reviewInputs = [
            { label: '평점', name: 'score', value: '5' },
            { label: '리뷰 내용', name: 'description', value: 'Good!' },
          ];

          reviewInputs.forEach(({ label, value }) => {
            fireEvent.change(getByLabelText(label), {
              target: { value },
            });

            expect(dispatch).toBeCalled();
          });
        });
        context('with reviews', () => {
          it('click listens events', () => {
            const { getByText } = renderRestaurantContainer();

            fireEvent.click(getByText('리뷰 남기기'));

            expect(dispatch).toBeCalledTimes(2);
          });
        });
      });
    });

    context('without review input form value', () => {
      given('reviewFields', () => ({
        score: '',
        description: '',
      }));

      context('without reviews', () => {
        given('restaurant', () => ({
          id: 1,
          name: '마법사주방',
          address: '서울시 강남구',
          reviews: [],
        }));

        it('renders title and "There are no reviews." text', () => {
          const NO_REVIEW_TEXT = '리뷰가 존재하지 않습니다.';

          const { container } = renderRestaurantContainer();

          expect(container).toHaveTextContent(NO_REVIEW_TEXT);
        });

        it('click listens events', () => {
          const { container, getByText } = renderRestaurantContainer();

          fireEvent.click(getByText('리뷰 남기기'));

          expect(container).toHaveTextContent('입력이 안된 사항이 있습니다.');
        });
      });
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);
    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });
});
