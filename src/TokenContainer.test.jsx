import React from 'react';

import { useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import { setAccessToken } from './actions';

import TokenContainer from './TokenContainer';

import accessTokenFixture from '../fixtures/accessToken';

jest.mock('react-redux');

describe('TokenContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  context('with accessToken in localStorage', () => {
    it('update redux state', () => {
      const { accessToken } = accessTokenFixture;

      localStorage.setItem('accessToken', accessToken);
      useDispatch.mockImplementation(() => dispatch);

      render((
        <TokenContainer />
      ));

      expect(dispatch).toBeCalledWith(setAccessToken({ accessToken }));
    });
  });
});
