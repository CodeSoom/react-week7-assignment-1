import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  /**
   * 평점
   * 리뷰 내용
   * 리뷰 남기기
   */
  it('renders labels', () => {
    const { queryByLabelText } = render(<ReviewForm />);

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });
});
