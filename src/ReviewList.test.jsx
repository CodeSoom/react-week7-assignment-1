import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  describe('when has reviews', () => {
    it('renders reviews', () => {
      render(<ReviewList />);
    });
  });

  // describe('when has no review', () => {

  // });
});
