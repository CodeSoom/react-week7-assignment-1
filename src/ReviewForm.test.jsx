import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderReviewForm({ reviewInputs }) {
    return render(<ReviewForm
      reviewInputs={reviewInputs}
      onChange={handleChange}
    />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a rating and a review', () => {
    const initialInputs = {
      rating: '',
      content: '',
    };

    const { queryByLabelText } = renderReviewForm({ reviewInputs: initialInputs });

    const currentInputs = [
      { label: '평점', value: '' },
      { label: '리뷰내용', value: '' },
    ];

    currentInputs.forEach(({ label, value }) => {
      expect(queryByLabelText(label)).not.toBeNull();
      expect(queryByLabelText(label).value).toBe(value);
    });
  });

  it('listens onChange', () => {
    const initialInputs = {
      rating: '',
      content: '',
    };

    const { queryByLabelText } = renderReviewForm({ reviewInputs: initialInputs });

    const currentInputs = [
      { label: '평점', name: 'rating', value: '5' },
      { label: '리뷰내용', name: 'content', value: '맛있네요' },
    ];

    currentInputs.forEach(({ label, name, value }) => {
      fireEvent.change(queryByLabelText(label), {
        target: { value },
      });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
