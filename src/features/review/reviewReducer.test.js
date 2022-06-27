import reducer from '../../apps/store/reducer';

import { setReviews, setReviewFields } from './reviewActions';

describe('reviewReducer', () => {
  describe('setReviews', () => {
    it('set reviews array', () => {
      const initialState = {
        reviewFields: {
          score: 2,
          description: '',
        },
        reviews: {
          data: [],
        },
      };

      const state = reducer(initialState, setReviews([{ score: 2, description: 'test' }]));

      expect(state.reviews.data).toEqual([{ score: 2, description: 'test' }]);
      expect(state.reviewFields.score).toBe(0);
    });
  });

  describe('setReviewFields', () => {
    it('change review field', () => {
      const initialState = {
        reviewFields: {
          score: 0,
          description: '',
        },
      };

      const state = reducer(initialState, setReviewFields('score', 2));

      expect(state.reviewFields.score).toBe(2);
    });
  });
});
