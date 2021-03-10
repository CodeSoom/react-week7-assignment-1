import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from '@components/ReviewForm';

describe('ReviewForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const reviewInputs = [
    {
      text: '평점', name: 'score', type: 'number', value: '3',
    },
    {
      text: '리뷰', name: 'description', type: 'text', value: '그만큼 맜있다는 거지',
    },
  ];

  const reviewFields = { score: '1', description: '그만큼 맜없다는 거지' };

  function renderReviewForm() {
    return render(<ReviewForm
      onChange={onChange}
      onSubmit={onSubmit}
      reviewFields={reviewFields}
    />);
  }

  it('renders input fields', () => {
    const { getByLabelText } = renderReviewForm();

    reviewInputs.forEach(({
      text, name, type, value,
    }) => {
      expect(getByLabelText(text)).toHaveAttribute('name', name);
      expect(getByLabelText(text)).toHaveAttribute('type', type);
      expect(getByLabelText(text).value).toBe(reviewFields[name]);
      fireEvent.change(getByLabelText(text), { target: { value } });
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('renders button ', () => {
    onSubmit.mockImplementationOnce((event) => {
      event.preventDefault();
    });
    const { getByRole } = renderReviewForm();

    const postReviewButton = getByRole('button', { name: '리뷰 남기기' });

    expect(postReviewButton).toBeInTheDocument();

    fireEvent.click(postReviewButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
