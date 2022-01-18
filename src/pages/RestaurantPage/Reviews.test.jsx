import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { getByText } = render(
      <Reviews reviews={[
        {
          id: 1, name: '테스터', score: 5, description: '좋아요',
        },
      ]}
      />,
    );

    expect(getByText('테스터')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('좋아요')).toBeInTheDocument();
  });
});
