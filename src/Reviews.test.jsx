import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('without reviews', () => {
    it('not renders', () => {
      [undefined, [], null].forEach((reviews) => {
        const { container } = render(
          <Reviews reviews={reviews} />,
        );

        expect(container).toBeEmptyDOMElement();
      });
    });
  });

  context('with reviews', () => {
    it('renders name and address', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
      ];

      const { container } = render(
        <Reviews reviews={reviews} />,
      );

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('맛있어요');
    });
  });
});
