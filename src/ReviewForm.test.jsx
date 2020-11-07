import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderReviewForm() {
    return render((
      <ReviewForm
        onChange={handleChange}
      />
    ));
  }

  it('renders input fields', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });

  describe('Change input fields', () => {
    it('calls onChange handler', () => {
      const { getByLabelText } = renderReviewForm();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: 5 },
      });

      expect(handleChange).toBeCalledWith({
        name: 'score',
        value: '5',
      });
    });
  });
});
