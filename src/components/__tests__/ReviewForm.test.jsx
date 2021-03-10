import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from '@components/ReviewForm';

describe('ReviewForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const reviewInputs = [
    {
      name: 'score', type: 'number', value: '3',
    },
    {
      name: 'description', type: 'text', value: '그만큼 맜있다는 거지',
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

  beforeEach(() => {
    onChange.mockClear();
    onSubmit.mockClear();
  });

  it('renders input fields', () => {
    const { getByLabelText } = renderReviewForm();

    reviewInputs.forEach(({
      name, type, value,
    }) => {
      expect(getByLabelText(name)).toHaveAttribute('name', name);
      expect(getByLabelText(name)).toHaveAttribute('type', type);
      expect(getByLabelText(name).value).toBe(reviewFields[name]);

      fireEvent.change(getByLabelText(name), { target: { value } });
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
