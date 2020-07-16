import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

import reviewFields from '../fixtures/reviewFields';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderReviewForm() {
    return render(
      <ReviewForm
        reviewFields={reviewFields}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  context('with review field values', () => {
    it('renders review write form', () => {
      const { queryByLabelText } = renderReviewForm();

      expect(queryByLabelText('평점').value).toBe('5');
      expect(queryByLabelText('리뷰 내용').value).toBe('Good!');
    });
  });

  it('listens score change event', () => {
    const { queryByLabelText } = renderReviewForm();

    fireEvent.change(queryByLabelText('평점'), {
      target: { value: '3' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'score',
      value: '3',
    });
  });

  it('listens description change event', () => {
    const { queryByLabelText } = renderReviewForm();

    fireEvent.change(queryByLabelText('리뷰 내용'), {
      target: { value: '맛있어요!' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'description',
      value: '맛있어요!',
    });
  });

  it('renders submit button', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleClick).toBeCalled();
  });
});
