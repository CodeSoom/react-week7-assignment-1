import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantReviewForm from './RestaurantReviewForm';

import REVIEW from '../fixtures/review';
import ACCESS_TOKEN from '../fixtures/accessToken';

const { score: SCORE, description: DESCRIPTION } = REVIEW;

describe('RestaurantReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderRestaurantReviewForm(accessToken) {
    return render(
      <RestaurantReviewForm
        accessToken={accessToken}
        score=""
        description=""
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged in', () => {
    it('renders review form', () => {
      const { queryByLabelText, queryByText } = renderRestaurantReviewForm(ACCESS_TOKEN);

      expect(queryByLabelText('평점').value).toBe('');
      expect(queryByLabelText('리뷰 내용').value).toBe('');
      expect(queryByText('리뷰 남기기')).not.toBeNull();
    });

    it('listens change event', () => {
      const { queryByLabelText } = renderRestaurantReviewForm(ACCESS_TOKEN);

      const controls = [{
        label: '평점',
        name: 'score',
        value: SCORE,
      }, {
        label: '리뷰 내용',
        name: 'description',
        value: DESCRIPTION,
      }];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(queryByLabelText(label), {
          target: {
            value,
          },
        });

        expect(handleChange).toBeCalledWith({
          name,
          value,
        });
      });
    });

    it('listens change event', () => {
      const { getByText } = renderRestaurantReviewForm(ACCESS_TOKEN);

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleClick).toBeCalled();
    });
  });

  context('when logged out', () => {
    it('renders review form', () => {
      const { queryByLabelText, queryByText } = renderRestaurantReviewForm();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
      expect(queryByText('리뷰 남기기')).toBeNull();
    });
  });
});
