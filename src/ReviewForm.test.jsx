import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderReviewForm = (error = false) => render((
    <ReviewForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      fields={{ score: '', description: '' }}
      error={error}
    />
  ));

  context('with isError', () => {
    it('renders error message', () => {
      const { container } = renderReviewForm(true);

      expect(container).toHaveTextContent('입력이 안된 사항이 있습니다.');
    });
  });

  context('without isError', () => {
    it('renders review inputs', () => {
      const { queryByLabelText } = renderReviewForm();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('change input value', () => {
      const reviewInput = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: 'Good!' },
      ];

      reviewInput.forEach(({ label, name, value }) => {
        const { getByLabelText } = renderReviewForm();

        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });

    it('Click button to send', () => {
      const { getByText } = renderReviewForm();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
