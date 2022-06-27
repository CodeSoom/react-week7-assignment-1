import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      regions: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [{ name: '서울', id: 1 }],
      },
      categories: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [],
      },
      restaurants: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        data: [],
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('20명에게 추천');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
