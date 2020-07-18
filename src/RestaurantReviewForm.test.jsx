import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantReviewForm from './RestaurantReviewForm';

describe('RestaurantReviewForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render(
      <RestaurantReviewForm
        score={score}
        description={description}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  it('renders input controls', () => {
    const score = '3';
    const description = '맛있어요.';
    const controls = [
      { label: '평점', value: score },
      { label: '리뷰 내용', value: description },
    ];

    const { getByLabelText } = renderReviewForm({ score, description });

    controls.forEach(({ label, value }) => {
      const control = getByLabelText(label);
      expect(control.value).toBe(value);
    });
  });

  it('changes input controls', () => {
    const controls = [
      { label: '평점', name: 'score', value: '3' },
      { label: '리뷰 내용', name: 'description', value: '맛있어요.' },
    ];

    const { getByLabelText } = renderReviewForm();

    controls.forEach(({ label, name, value }) => {
      const control = getByLabelText(label);
      fireEvent.change(control, { target: { value } });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders register button', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.submit(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
