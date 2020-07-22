import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score = '', description = '' }) {
    return render(<ReviewForm
      fields={{ score, description }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />);
  }

  it('renders review write form', () => {
    const { getByLabelText } = renderReviewForm({});

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders button', () => {
    const { getByText } = renderReviewForm({});

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });

  // it('listens change events', () => {
  //   const score = '5';
  //   const description = '맛있어요';
  //   const { getByLabelText } = renderReviewForm({ score, description });

  //   const controls = [
  //     { label: '평점', name: 'score', value: '5' },
  //     { label: '리뷰 내용', name: 'description', value: '최고' },
  //   ];

  //   controls.forEach(({ label, name, value }) => {
  //     fireEvent.change(getByLabelText(label), { target: { value } });
  //     expect(handleChange).toBeCalledWith({ name, value });
  //   });
  // });

  it('listens click events', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));
    expect(handleSubmit).toBeCalled();
  });
});
