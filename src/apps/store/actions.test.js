import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  setAccessToken,
  login,
} from './actions';

import { authorize } from '../services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');
jest.mock('../../features/region/regionApi.js');

describe('actions', () => {
  let store;

  describe('login', () => {
    context('with valid credentials', () => {
      beforeEach(() => {
        store = mockStore({
          loginFields: {
            email: 'tester@example.com',
            password: 'test',
          },
        });
        authorize.mockResolvedValue({
          accessToken: 'accessToken',
        });
      });

      it('runs setAccessToken', async () => {
        await store.dispatch(login());

        const actions = store.getActions();

        expect(actions[1]).toEqual(setAccessToken('accessToken'));
      });
    });
  });
});
