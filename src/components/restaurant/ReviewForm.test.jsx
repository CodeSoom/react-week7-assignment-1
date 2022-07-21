import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('<ReviewForm />', () => {
  const renderReviewForm = () => render(<ReviewForm />);

  it('renders score and description input controls', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
  });

  it('renders "리뷰 남기기" button', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });
});
