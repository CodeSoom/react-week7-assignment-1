import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItem } from './services/storage';

import App from './App';

import RESTAURANT from '../fixtures/restaurant';

import { setAccessToken } from './actions';

jest.mock('react-redux');
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
      restaurant: RESTAURANT,
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

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('떡볶이');
      expect(container).toHaveTextContent('냥냥이');
      expect(container).toHaveTextContent('가지말자');
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

  context('when accessToken is in localStorage', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => 'ACCESS_TOKEN');
    });

    it('dispatchs setAccessToken', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith(setAccessToken('ACCESS_TOKEN'));
    });
  });

  context('when accessToken is not in localStorage', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => '');
    });

    it("doesn't dispatch setAccessToken", () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });
});
