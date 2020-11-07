import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RestaurantReview from './RestaurantReview';

describe('RestaurantReview', () => {
  const handleClick = jest.fn();
  const handleChangeScore = jest.fn();
  const handleChangeDescription = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
    handleChangeScore.mockClear();
    handleChangeDescription.mockClear();
  });

  const renderRestaurantReview = ({ score, description }) => render(
    <RestaurantReview
      score={score}
      description={description}
      onClick={handleClick}
      onChangeDescription={handleChangeDescription}
      onChangeScore={handleChangeScore}
    />,
  );

  it('renders input and button', () => {
    renderRestaurantReview({});

    expect(screen.getByPlaceholderText('평가 점수')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('리뷰를 작성해 주세요!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });

  context('when input field is changed', () => {
    it('call onChangeDescription', () => {
      renderRestaurantReview({});

      expect(handleChangeDescription).not.toBeCalled();

      fireEvent.change(
        screen.getByPlaceholderText('리뷰를 작성해 주세요!'),
        { target: { value: 'review' } },
      );

      expect(handleChangeDescription).toBeCalled();
    });

    it('call onChangeScore', () => {
      renderRestaurantReview({});

      expect(handleChangeScore).not.toBeCalled();

      fireEvent.change(
        screen.getByPlaceholderText('평가 점수'),
        { target: { value: 5 } },
      );

      expect(handleChangeScore).toBeCalled();
    });
  });

  context('without review value', () => {
    it('can not click button', () => {
      renderRestaurantReview({});

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button', { name: '리뷰 남기기' }));

      expect(handleClick).not.toBeCalled();
    });
  });

  context('with review value', () => {
    it('can click button', () => {
      renderRestaurantReview({ description: 'review', score: 5 });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button', { name: '리뷰 남기기' }));

      expect(handleClick).toBeCalled();
    });
  });
});
