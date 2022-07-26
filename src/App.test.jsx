import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItem } from './storage';

import { setAccessToken } from './actions';

import App from './App';

jest.mock('react-redux');
jest.mock('./storage');

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
        email: '',
        password: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
      errors: {
        login: null,
      },
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

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('with path /login', () => {
    it('renders the login page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('Log In');
    });
  });

  context('with accessToken in localStorage', () => {
    beforeEach(() => {
      loadItem.mockClear();
      loadItem.mockReturnValue('ACCESS_TOKEN');
    });

    it('dispatches setAccessToken', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith(setAccessToken('ACCESS_TOKEN'));
    });
  });

  context('without accessToken in localStorage', () => {
    beforeEach(() => {
      loadItem.mockClear();
      loadItem.mockReturnValue(null);
    });

    it('not dispatches setAccessToken', () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });
});
