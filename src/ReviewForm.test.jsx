import { render } from '@testing-library/react';
import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  function renderReviewForm({ title }) {
    return render(<ReviewForm title={title} />);
  }

  it('input - label이 렌더링된다', () => {
    const { getByLabelText } = renderReviewForm({ title: '평점' });

    expect(getByLabelText('평점')).toBeInTheDocument();
  });
});
