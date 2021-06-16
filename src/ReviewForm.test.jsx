import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const form = {
    score: '3',
    description: 'soso',
  };

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderReviewForm() {
    return render(
      <ReviewForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />,
    );
  }
  it('renders input controls', () => {
    const { getByRole } = renderReviewForm();

    expect(getByRole('textbox', { name: 'score' })).toHaveValue('3');
    expect(getByRole('textbox', { name: 'description' })).toHaveValue('soso');
  });

  it('renders submit button', () => {
    const { getByRole } = renderReviewForm();

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });
});
