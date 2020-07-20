import React from 'react';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { setAccessToken } from './actions';

import TokenContainer from './TokenContainer';

import accessTokenFixture from '../fixtures/accessToken';
import { getToken } from './services/accessTokenRepository';

jest.mock('react-redux');
jest.mock('./services/accessTokenRepository');

describe('TokenContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderTokenContainer() {
    return render((
      <MemoryRouter>
        <TokenContainer />
      </MemoryRouter>
    ));
  }

  it('renders the route page', () => {
    const { container } = renderTokenContainer();

    expect(container).toHaveTextContent('헤더');
  });

  context('with accessToken', () => {
    it('update redux state', () => {
      const { accessToken } = accessTokenFixture;
      getToken.mockImplementation(() => (accessToken));

      useDispatch.mockImplementation(() => dispatch);

      renderTokenContainer();

      expect(dispatch).toBeCalledWith(setAccessToken({ accessToken }));
    });
  });

  context('without accessToken', () => {
    it('do nothing', () => {
      getToken.mockImplementation(() => (''));

      renderTokenContainer();

      expect(dispatch).not.toBeCalled();
    });
  });
});
