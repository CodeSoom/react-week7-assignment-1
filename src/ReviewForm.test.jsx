import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

jest.mock('react-redux');

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score, description }) {
    return render(
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders review write fields', () => {
    const { getByLabelText } = renderReviewForm({});

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders review submit button', () => {
    const { container } = renderReviewForm({});

    expect(container).toHaveTextContent('리뷰 남기기');
  });

  it('listens change events', () => {
    const score = '5';
    const description = '맛있어요!';

    const { getByLabelText } = renderReviewForm({ score, description });

    const controls = [
      {
        label: '평점',
        name: 'score',
        value: '4',
      },
      {
        label: '리뷰 내용',
        name: 'description',
        value: '구름이 두둥실 떠다니는 맛!',
      },
    ];

    controls.forEach(({
      label, value,
    }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });
    });

    expect(handleChange).toBeCalledTimes(2);
  });

  it('listens submit event', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
