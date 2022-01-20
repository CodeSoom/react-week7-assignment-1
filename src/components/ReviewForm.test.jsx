import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderReviewForm() {
    return render((
      <ReviewForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders inputs and button', () => {
    const { queryByLabelText, queryByRole } = renderReviewForm();

    expect(queryByLabelText('평점')).toBeInTheDocument();
    expect(queryByLabelText('리뷰 내용')).toBeInTheDocument();

    expect(queryByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
  });

  it('types 평점 and 리뷰 내용, calls onChanage handler', () => {
    const { getByLabelText } = renderReviewForm();

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'score',
      value: '5',
    });

    fireEvent.change(getByLabelText('리뷰 내용'), {
      target: { value: '맛있어요!' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'description',
      value: '맛있어요!',
    });
  });

  it('clicks button, calls onSubmit handler', () => {
    const { getByRole } = renderReviewForm();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(handleSubmit).toBeCalled();
  });
});
