import React from 'react';

import { render, screen } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();
  const register = jest.fn();
  const errors = jest.fn();

  const renderReviewForm = () => render((
    <ReviewForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
    />
  ));

  it('renders review form', () => {
    renderReviewForm();

    expect(screen.getByLabelText('평점')).toBeInTheDocument();
    expect(screen.getByLabelText('리뷰 내용')).toBeInTheDocument();
  });
});
