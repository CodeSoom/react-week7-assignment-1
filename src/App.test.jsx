import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

import { setAccessToken } from './actions';
import { useDispatch, useSelector } from 'react-redux';
jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
        categories: [],
        restaurants: [],
        restaurant: { id: 1, name: '마녀주방' },
        loginField: {
          email: '',
          password: '',
        },
        reviewField: {
          score: '',
          description: '',
        },
      })
    );
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
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

  context('with accessToken', () => {
    const accessToken = 'accessToken';
    beforeEach(() => {
      jest
        .spyOn(globalThis.localStorage, 'getItem')
        .mockImplementation(() => accessToken);
    });

    it('dispatch setAccessToken action', () => {
      expect(dispatch).toBeCalledWith(setAccessToken(accessToken));
    });
  });

  // context('without accessToken', () => {
  //   it('not dispatch setAccessToken action');
  // });
});

// const dispatch = useDispatch;
// const accessToken = localStorage.getItem('accessToken');
// if (accessToken) {
//   dispatch(setAccessToken);
// }
