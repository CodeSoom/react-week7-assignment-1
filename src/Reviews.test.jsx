import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviewer, score, description', () => {
    const items = [
      {
        id: 1,
        restaurantId: 1,
        name: '테스터',
        score: 5,
        description: '훌륭하다',
      },
    ];

    const { container } = render(<Reviews items={items} />);

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5');
    expect(container).toHaveTextContent('훌륭하다');
  });
});
