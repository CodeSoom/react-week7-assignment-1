import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('<ReviewForm />', () => {
  const renderReviewForm = ({ score, description }) => render((
    <ReviewForm
      score={score}
      description={description}
    />
  ));

  it('renders score and description input controls', () => {
    const { getByLabelText } = renderReviewForm({
      score: '',
      description: '',
    });

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
  });

  it('renders "리뷰 남기기" button', () => {
    const { getByText } = renderReviewForm({
      score: '',
      description: '',
    });

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });

  context('with score and description', () => {
    it('it renders current score and description', () => {
      const { getByLabelText } = renderReviewForm({
        score: '5',
        description: 'Good!',
      });

      expect(getByLabelText('평점')).toHaveDisplayValue('5');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('Good!');
    });
  });

  context('without score and description', () => {
    it('it renders empty input controls', () => {
      const { getByLabelText } = renderReviewForm({
        score: '',
        description: '',
      });

      expect(getByLabelText('평점')).toHaveDisplayValue('');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('');
    });
  });
});
