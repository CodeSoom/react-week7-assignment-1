import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('reders reivews title', () => {
    const { container } = render(<Reviews />);

    expect(container).toHaveTextContent('리뷰');
  });
});
