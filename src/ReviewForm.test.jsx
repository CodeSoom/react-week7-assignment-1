import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderReviewForm() {
    return render(<ReviewForm onChange={handleChange} />);
  }

  it('renders review form', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    fireEvent.change(getByLabelText('평점'), { target: { value: 5 } });
    expect(handleChange).toBeCalledWith({ name: 'score', value: '5' });

    fireEvent.change(getByLabelText('리뷰 내용'), { target: { value: 'good' } });
    expect(handleChange).toBeCalledWith({ name: 'description', value: 'good' });
  });
});
