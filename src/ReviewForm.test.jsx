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

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('평점').value).toBe('');

    expect(queryByLabelText('리뷰내용')).not.toBeNull();
    expect(queryByLabelText('리뷰내용').value).toBe('');
  });

  it('listens onChange', () => {
    const initialInputs = {
      rating: '',
      content: '',
    };

    const { queryByLabelText } = renderReviewForm({ reviewInputs: initialInputs });

    fireEvent.change(queryByLabelText('평점'), {
      target: { value: 3 },
    });

    expect(handleChange).toBeCalled();

    fireEvent.change(queryByLabelText('리뷰내용'), {
      target: { value: '보통이에요' },
    });

    expect(handleChange).toBeCalled();
  });
});
