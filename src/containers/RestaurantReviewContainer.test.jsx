import React from 'react';
import { render } from '@testing-library/react';

import RestaurantReviewContainer from './RestaurantReviewContainer';

describe('RestaurantReviewContainer', () => {
  it('renders component', () => {
    render(<RestaurantReviewContainer />);
  });
});
