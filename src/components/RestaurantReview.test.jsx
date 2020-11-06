import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RestaurantReview from './RestaurantReview';

describe('RestaurantReview', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
    handleChange.mockClear();
  });

  const renderRestaurantReview = ({ review }) => render(
    <RestaurantReview
      review={review}
      onClick={handleClick}
      onChange={handleChange}
    />,
  );

  it('renders input and button', () => {
    renderRestaurantReview({});

    expect(screen.getByPlaceholderText('리뷰를 작성해 주세요!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '작성하기' })).toBeInTheDocument();
  });

  context('when review is changed', () => {
    it('call onChange', () => {
      renderRestaurantReview({});

      expect(handleChange).not.toBeCalled();

      fireEvent.change(
        screen.getByPlaceholderText('리뷰를 작성해 주세요!'),
        { target: { value: 'review' } },
      );

      expect(handleChange).toBeCalled();
    });
  });

  context('without review value', () => {
    it('can not click button', () => {
      renderRestaurantReview({});

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button', { name: '작성하기' }));

      expect(handleClick).not.toBeCalled();
    });
  });

  context('with review value', () => {
    it('can click button', () => {
      renderRestaurantReview({ review: 'review' });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button', { name: '작성하기' }));

      expect(handleClick).toBeCalled();
    });
  });
});
