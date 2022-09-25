import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

import { reviewFormcontrols } from '../../fixtures/controls';
import reviewFields from '../../fixtures/reviewFields';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render(
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders review write fields', () => {
    const { score, description } = reviewFields;

    const { getByLabelText } = renderReviewForm({ score, description });

    reviewFormcontrols.forEach(({ label, name }) => {
      const value = reviewFields[name];

      const input = getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    reviewFormcontrols.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders a button to add review', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
