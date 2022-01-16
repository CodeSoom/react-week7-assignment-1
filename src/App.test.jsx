import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { getStorage } from './util/storage';

jest.mock('react-redux');
jest.mock('./util/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    getStorage.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
      restaurant: { id: 1, name: '마녀주방', reviews: [] },
      loginForm: { id: '', pw: '' },
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

  context('with path /login', () => {
    it('renders the login page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('Login');
    });
  });

  context('with path /logout', () => {
    it('renders the logout page', () => {
      const { container } = renderApp({ path: '/logout' });

      expect(container).toHaveTextContent('Logout');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('로그아웃 상태일 때', () => {
    beforeEach(() => {
      getStorage.mockImplementation(() => null);
    });

    it('dispatch를 실행하지 않는다.', () => {
      renderApp({ path: '/' });
      expect(dispatch).not.toBeCalled();
    });
  });

  context('로그인 상태일 때', () => {
    beforeEach(() => {
      getStorage.mockImplementation(() => 'accessToken');
    });

    it('dispatch를 실행한다.', () => {
      renderApp({ path: '/' });
      expect(dispatch).toBeCalled();
    });
  });
});
