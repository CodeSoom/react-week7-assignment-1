// 관심사: 상태그려주기
import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderReviewForm = () => render((
    <ReviewForm
      onChangeField={handleChange}
      onClickSubmit={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input with "평점" label to call onChange event', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).toBeInTheDocument();

    fireEvent.change(getByLabelText('평점'), {
      target: {
        name: 'rating',
        value: '5',
      },
    });

    expect(handleChange).toBeCalled();
  });

  it('renders input with "리뷰 내용" label', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

    fireEvent.change(getByLabelText('리뷰 내용'), {
      target: {
        name: 'description',
        value: '짱맛존맛',
      },
    });

    expect(handleChange).toBeCalled();
  });

  it('renders "리뷰 남기기" button ', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleClick).toBeCalled();
  });
});
