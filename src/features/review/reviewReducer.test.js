import reducer from '../../apps/store/reducer';

import { setReviews, setReviewFields } from './reviewActions';

describe('reviewReducer', () => {
  describe('setReviews', () => {
    it('set review inside reviews array', () => {
      const initialState = {
        reviews: {
          data: [{ score: 2, description: 'test' }],
        },
      };

      const state = reducer(initialState, setReviews({ score: 5, description: 'test2' }));

      expect(state.reviews.data).toEqual([{ score: 2, description: 'test' }, { score: 5, description: 'test2' }]);
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
