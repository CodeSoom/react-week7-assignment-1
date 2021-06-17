import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders title', () => {
    const { container } = render(<Reviews />);

    expect(container).toHaveTextContent('메뉴');
  });
});
