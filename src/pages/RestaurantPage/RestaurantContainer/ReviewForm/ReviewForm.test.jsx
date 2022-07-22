import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const reviewFields = {
    score: '1',
    description: '맛 없어요!',
  };

  const renderReviewForm = () => render((
    <ReviewForm
      reviewFields={reviewFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders inputs', () => {
    const { getByLabelText } = renderReviewForm();

    const labels = ['평점', '리뷰 내용'];

    labels.forEach((label) => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('renders review fields', () => {
    const { getByLabelText } = renderReviewForm();

    const inputs = [
      { label: '평점', name: 'score' },
      { label: '리뷰 내용', name: 'description' },
    ];

    inputs.forEach(({ label, name }) => {
      const value = name === 'score'
        ? Number(reviewFields[name])
        : reviewFields[name];

      expect(getByLabelText(label)).toHaveValue(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    const inputs = [
      { label: '평점', name: 'score', value: '10' },
      { label: '리뷰 내용', name: 'description', value: '맛있어요' },
    ];

    inputs.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders submit button', () => {
    const { getByRole } = renderReviewForm();

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });

  it('listens submit event', () => {
    const { getByRole } = renderReviewForm();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(handleSubmit).toBeCalled();
  });
});
