import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderReviewForm() {
    return render(
      <ReviewForm onChange={handleChange} />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders review write form', () => {
    const { queryByText } = renderReviewForm();

    expect(queryByText('평점')).not.toBeNull();
    expect(queryByText('리뷰 내용')).not.toBeNull();
  });

  context('with review change event', () => {
    it('calls handleChange', () => {
      const inputs = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '정말 최고!' },
      ];

      const { getByLabelText } = renderReviewForm();

      inputs.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });
  });
});
