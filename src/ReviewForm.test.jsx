import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ReviewForm from './ReviewForm';

jest.mock('react-redux');

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();

    useSelector.mockImplementation((selector) => selector({
      reviewFields: {
        score: '5',
        description: '맛 좋',
      },
    }));
  });

  function renderReviewForm({ score = '', description = '' }) {
    return render((
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input control', () => {
    const { getByLabelText } = renderReviewForm({});

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listen change events', () => {
    const score = '4';
    const description = '맛';

    const { getByLabelText } = renderReviewForm({ score, description });

    const controls = [
      {
        label: '평점',
        name: 'score',
        origin: score,
        value: '5',
      },
      {
        label: '리뷰 내용',
        name: 'description',
        origin: description,
        value: '맛 좋',
      },
    ];

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders send review button', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
