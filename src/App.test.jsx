// ToDo localStorage setItem, getItem 모킹
import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItems } from './services/storage';

import App from './App';

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
      restaurant: { id: 1, name: '마녀주방' },
      inputField: {
        email: '',
        password: '',
      },
      accessToken: 'ACCESS_TOKEN',
      reviews: [],
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';

    beforeEach(() => {
      loadItems.mockImplementation(() => accessToken);
    });

    it('calls dispatch with "setAccessToken" action.', () => {
      renderApp({ path: '/login' });

      expect(dispatch).toBeCalledWith({
        type: 'setAccessToken',
        payload: { accessToken },
      });
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      loadItems.mockImplementation(() => null);
    });

    it("dosen't call dispatch with 'setAccessToken' action.", () => {
      renderApp({ path: '/login' });

      expect(dispatch).not.toBeCalled();
    });
  });

  it('renders the home page with path "/"', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('Home');
  });

  it('renders the about page with path "/about"', () => {
    const { container } = renderApp({ path: '/about' });

    expect(container).toHaveTextContent('About 페이지');
  });

  it('renders the restaurants page with path "/restaurants"', () => {
    const { container } = renderApp({ path: '/restaurants' });

    expect(container).toHaveTextContent('서울');
  });

  it('renders the restaurant page with path "/restaurants/:id"', () => {
    const { container } = renderApp({ path: '/restaurants/1' });

    expect(container).toHaveTextContent('마녀주방');
  });

  it('renders the login page with path "/login"', () => {
    const { container } = renderApp({ path: '/login' });

    expect(container).toHaveTextContent('Log In');
  });

  it('renders the not found page with "invalid" path', () => {
    const { container } = renderApp({ path: '/xxx' });

    expect(container).toHaveTextContent('Not Found');
  });
});
