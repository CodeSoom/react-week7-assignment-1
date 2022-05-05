import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review write fields ', () => {
    const handleChange = jest.fn();

    const { container, queryByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });
});
