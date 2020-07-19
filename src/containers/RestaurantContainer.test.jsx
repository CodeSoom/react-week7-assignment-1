import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render((
    <RestaurantContainer />
  ));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restuarant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: 'ACCESS_TOKEN',
        },
        restaurant: RESTAURANT,
        review: {
          input: {
            score: '',
            description: '',
          },
        },
      }));
    });
    it('renders restuarant-info', () => {
      const { container } = renderComponent();

      expect(container).toHaveTextContent(RESTAURANT.name);
      expect(container).toHaveTextContent(RESTAURANT.address);
      expect(container).toHaveTextContent(RESTAURANT.menuItems[0].name);
    });
  });

  context('with session-token', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: 'ACCESS_TOKEN',
        },
        restaurant: RESTAURANT,
        review: {
          input: {
            score: '',
            description: '',
          },
        },
      }));
    });

    it('display review-form', () => {
      const { getByLabelText } = renderComponent();

      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });
  });

  context('without review-input', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: 'ACCESS_TOKEN',
        },
        restaurant: RESTAURANT,
        review: {
          input: {
            score: '',
            description: '',
          },
        },
      }));
    });

    context('when input score, description', () => {
      it('fires change event', () => {
        const { getByLabelText } = renderComponent();
        // When
        const scoreInput = getByLabelText('평점');
        const descriptionInput = getByLabelText('리뷰 내용');
        fireEvent.change(scoreInput, { target: { name: 'score', value: '5' } });
        fireEvent.change(descriptionInput, { target: { name: 'description', value: 'REVIEW_CONTENT' } });
        // Then
        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('with review-input', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: 'ACCESS_TOKEN',
        },
        restaurant: RESTAURANT,
        review: {
          input: {
            score: '5',
            description: 'REVIEW_CONTENT',
          },
        },
      }));
    });

    context('when click submit-button', () => {
      it('fires submit event', () => {
        const { getByRole } = renderComponent();
        // When
        const submitButton = getByRole('button', { name: '리뷰 남기기' });
        fireEvent.click(submitButton);
        // Then
        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
