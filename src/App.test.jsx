import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

import App from './App';

jest.mock('react-redux');
jest.mock('./actions');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
      restaurant: { id: 1, name: '마녀주방' },
      loginFields: {
        email: 'test@test.com',
        password: 'password1',
      },
      accessToken: '',
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About 페이지');
    });
  });

  context('with path /login', () => {
    it('renders the login page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('Log In');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders the restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('마녀주방');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  describe('check login', () => {
    beforeEach(() => {
      loadItem.mockClear();
      setAccessToken.mockClear();
    });

    context('when logged in', () => {
      beforeEach(() => {
        loadItem.mockReturnValue('ACCESS_TOKEN');
      });

      it('set access token', () => {
        renderApp({ path: '/' });

        expect(loadItem).toBeCalledWith('accessToken');
        expect(setAccessToken).toBeCalledWith('ACCESS_TOKEN');
      });
    });

    context('when logged out', () => {
      beforeEach(() => {
        loadItem.mockReturnValue(null);
      });

      it('do not set access token', () => {
        renderApp({ path: '/' });

        expect(loadItem).toBeCalledWith('accessToken');
        expect(setAccessToken).not.toBeCalled();
      });
    });
  });
});
