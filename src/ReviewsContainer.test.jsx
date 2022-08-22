import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

describe('REviewsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    reviews: [
      {
        id: 15,
        restaurantId: 2,
        name: '테스터',
        score: 5,
        description: '아주 맛있어요~!!',
      },
      {
        id: 16,
        restaurantId: 2,
        name: '테스터',
        score: 3,
        description: '맛이 그냥 그래!!',
      },
    ],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders reviewer', () => {
    const { container } = render(
      <ReviewsContainer />,
    );

    expect(container).toHaveTextContent('테스터');
  });

  it('renders sorted list of review', () => {
    const { container } = render(
      <ReviewsContainer />,
    );

    const { children } = container;

    expect(children.item(1).children.item(0).textContent).toContain('맛이 그냥 그래!!');
    expect(children.item(1).children.item(1).textContent).toContain('아주 맛있어요~!!');
  });
});
