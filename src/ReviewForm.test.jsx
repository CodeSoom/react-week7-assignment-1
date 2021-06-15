import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const form = {
    score: 'score',
    description: 'description',
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

    expect(getByRole('textbox', { name: 'score' })).toHaveValue('score');
    expect(getByRole('textbox', { name: 'description' })).toHaveValue('description');
  });

  it('renders submit button', () => {
    const { getByRole } = renderReviewForm();

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });
});
