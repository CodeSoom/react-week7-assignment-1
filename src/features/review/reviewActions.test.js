import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { loadReviews, postReview, setReviews } from './reviewActions';

import { createReview } from './reviewApi';
import { fetchRestaurantById } from '../restaurant/restaurantApi';

import { setError, setLoading } from '../../apps/store/actions';

import reviews from '../../../fixtures/reviews';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./reviewApi');
jest.mock('../restaurant/restaurantApi');

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

      it('runs setLoading', async () => {
        await store.dispatch(postReview(1));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setLoading('reviews', true));
      });
    });
    context('with Error', () => {
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
        createReview.mockRejectedValue(new Error('error'));
      });
      it('runs setError', async () => {
        await store.dispatch(postReview(1));

        const actions = store.getActions();

        expect(actions[1]).toEqual(setError('reviews', 'error'));
      });
    });
  });

  describe('loadReviews', () => {
    context('with restaurantId', () => {
      beforeEach(() => {
        store = mockStore({
          reviewFields: {
            score: 5,
            description: 'test',
          },
          reviews: {
            data: [],
          },
        });
        fetchRestaurantById.mockResolvedValue({
          reviews,
          status: 200,
        });
      });

      it('runs setReviews', async () => {
        await store.dispatch(loadReviews(1));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setReviews(reviews));
      });
    });
  });
});
