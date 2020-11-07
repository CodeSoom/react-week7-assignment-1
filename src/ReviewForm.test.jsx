import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderReviewForm() {
    return render((
      <ReviewForm onChange={handleChange} />
    ));
  }

  it('renders input fields', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });

  describe('Change input fields', () => {
    it('calls onChange handler', () => {
      const { getByLabelText } = renderReviewForm();

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '맛있습네다.' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });
  });

  it('renders send button', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });
});
