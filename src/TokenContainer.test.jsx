import React from 'react';

import { useDispatch } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

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

  context('with accessToken in localStorage', () => {
    it('update redux state', () => {
      const { accessToken } = accessTokenFixture;

      localStorage.setItem('accessToken', accessToken);
      useDispatch.mockImplementation(() => dispatch);

      renderTokenContainer();

      expect(dispatch).toBeCalledWith(setAccessToken({ accessToken }));
    });
  });

  context('without accessToken in localStorage', () => {
    it('do nothing', () => {
      localStorage.removeItem('accessToken');

      renderTokenContainer();

      expect(dispatch).not.toBeCalled();
    });
  });
});
