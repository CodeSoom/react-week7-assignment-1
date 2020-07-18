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

  it('changes input controls', () => {
    const controls = [
      { label: '평점', name: 'score', values: { before: '0', after: '5' } },
      { label: '리뷰 내용', name: 'description', values: { before: '별로예요.', after: '맛있어요.' } },
    ];

    const { getByLabelText } = renderReviewForm(
      {
        score: controls[0].values.before,
        description: controls[1].values.before,
      },
    );

    controls.forEach(({ label, name, values: { after } }) => {
      const control = getByLabelText(label);
      fireEvent.change(control, { target: { value: after } });

      expect(handleChange).toBeCalledWith({ name, value: after });
    });
  });

  it('renders register button', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.submit(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
