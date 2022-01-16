import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render(
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders review write fields ', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰내용')).not.toBeNull();
  });

  it('renders value of fields ', () => {
    const { queryByLabelText } = renderReviewForm({
      score: '4',
      description: '굿굿',
    });

    expect(queryByLabelText('평점').value).toBe('4');
    expect(queryByLabelText('리뷰내용').value).toBe('굿굿');
  });

  it('listens description change events', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '4' },
      { label: '리뷰내용', name: 'description', value: '굿굿' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Send" button', () => {
    const { getByText } = renderReviewForm({
      score: '4',
      description: '굿굿',
    });

    fireEvent.click(getByText('리뷰 남기기'));
    expect(handleSubmit).toBeCalled();
  });
});
