import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import ACCESS_TOKEN from '../../fixtures/accessToken';
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
    useSelector.mockImplementation((selector) => selector({
      session: {
        accessToken: ACCESS_TOKEN,
      },
      restaurant: given.restaurant,
      review: {
        input: given.reviewInput,
      },
    }));
  });

  context('with restaurant', () => {
    given('restaurant', () => RESTAURANT);
    given('reviewInput', () => ({ score: '', description: '' }));

    it('display review-form', () => {
      const { getByLabelText } = renderComponent();
      expect(getByLabelText('평점')).not.toBeNull();
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });
  });

  context('without review-input', () => {
    given('restaurant', () => RESTAURANT);
    given('reviewInput', () => ({ score: '', description: '' }));

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
    given('restaurant', () => RESTAURANT);
    given('reviewInput', () => ({ score: '5', description: 'REVIEW_CONTENT' }));

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
