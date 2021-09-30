import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const reviewItems = [
        {
          id: 1, name: '작성자', description: '존맛', score: '5',
        },
      ];

      const { container } = render(<ReviewItems reviewItems={reviewItems} />);

      expect(container).toHaveTextContent('작성자');
      expect(container).toHaveTextContent('5');
      expect(container).toHaveTextContent('존맛');
    });
  });

  context('without review item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviewItems) => {
        const { container } = render(<ReviewItems reviewItems={reviewItems} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
