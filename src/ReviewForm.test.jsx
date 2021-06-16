import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderReviewForm() {
    return render(
      <ReviewForm
        onChange={handleChange}
      />,
    );
  }

  it('renders review write form', () => {
    const { queryByText } = renderReviewForm();

    expect(queryByText('평점')).not.toBeNull();
    expect(queryByText('리뷰 내용')).not.toBeNull();
  });

  it('listens change event', () => {
    const { name, value } = {
      name: 'score',
      value: '5',
    };

    const { getByLabelText } = renderReviewForm({ name, value });

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(handleChange).toBeCalled();
  });
});
