import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

describe('ReviewsContainer', () => {
  context('with reviews data', () => {
    useSelector.mockImplementation((selector) => selector({
      reviews: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [
          {
            id: 1, name: '마법사주방', score: 5, description: '맛있어요',
          },
        ],
      },
    }));
    it('renders reviews', () => {
      const { container } = render(<ReviewsContainer />);

      expect(container).toHaveTextContent('맛있어요');
    });
  });
});
