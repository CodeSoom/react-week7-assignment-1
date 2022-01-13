// 관심사: 상태그려주기
import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const renderReviewForm = () => render((
    <ReviewForm />
  ));

  it('renders input with "평점" label', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).toBeInTheDocument();
  });

  it('renders input with "리뷰 내용" label', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
  });

  it('renders "리뷰 남기기" button ', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });
});
