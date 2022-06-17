import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { postReview, setReviews } from './reviewActions';

import { createReview } from './reviewApi';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./reviewApi');

describe('reviewActions', () => {
  let store;

  describe('postReview', () => {
    context('with valid credentials', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: 5,
            description: 'test',
          },
          auth: {
            accessToken: 'accessToken',
          },
        });
        createReview.mockResolvedValue({
          data: {},
          status: 201,
        });
      });

      it('runs setReviews', async () => {
        await store.dispatch(postReview(1));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setReviews({ score: 5, description: 'test' }));
      });
    });
  });
});
