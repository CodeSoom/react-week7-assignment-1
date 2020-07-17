import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderReviewForm({ score = '', description = '' }) {
    return render(
      <ReviewForm
        score={score}
        description={description}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  it('renders input controls', () => {
    const controls = [
      { label: '평점', value: '3' },
      { label: '리뷰 내용', value: '맛있어요.' },
    ];

    const { getByLabelText } = renderReviewForm(
      {
        score: controls[0].value,
        description: controls[1].value,
      },
    );

    controls.forEach(({ label, value }) => {
      const control = getByLabelText(label);
      expect(control.value).toBe(value);
    });
  });
});
