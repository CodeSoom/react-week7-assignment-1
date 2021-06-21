import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderReviewForm() {
    return render(
      <ReviewForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders review fields', () => {
    const { queryByText } = renderReviewForm();

    expect(queryByText('평점')).not.toBeNull();
    expect(queryByText('리뷰 내용')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '최고인듯!' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click event', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
