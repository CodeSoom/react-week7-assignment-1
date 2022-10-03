import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { loadItem } from './services/storage';

import restaurant from '../fixtures/restaurant';

jest.mock('react-redux');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: '',
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
      restaurant,
      loginFields: {
        email: '',
        password: '',
        error: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
    }));

    given('storage', () => ({ accessToken: given.accessToken }));

    loadItem.mockImplementation((key) => given.storage[key]);
  });

  function renderApp({ path = '/' } = {}) {
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

      expect(container).toHaveTextContent(restaurant.name);
    });
  });

  context('with path /login', () => {
    it('renders the login page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('Log In');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('doesn\'t call dispatch', () => {
      renderApp();

      expect(dispatch).not.toBeCalled();
    });
  });

  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';

    given('accessToken', () => accessToken);

    it('calls dispatch with \'setAccessToken\' action', () => {
      renderApp();

      expect(dispatch).toBeCalledWith({
        type: 'setAccessToken',
        payload: { accessToken },
      });
    });
  });
});
