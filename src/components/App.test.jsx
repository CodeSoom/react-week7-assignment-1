import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { loadItem } from '../services/storage';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/storage');

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
      renderApp({ path: '/' });

      expect(screen.getByText('Home')).toBeInTheDocument();
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      renderApp({ path: '/about' });

      expect(screen.getByText('About 페이지')).toBeInTheDocument();
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      renderApp({ path: '/restaurants' });

      expect(screen.getByText('서울')).toBeInTheDocument();
    });
  });

  context('with path /restaurants/:id', () => {
    it('renders the restaurant page', () => {
      renderApp({ path: '/restaurants/1' });

      expect(screen.getByText('마녀주방')).toBeInTheDocument();
    });
  });

  context('with path /login', () => {
    it('renders the log in page', () => {
      renderApp({ path: '/login' });

      expect(screen.getByRole('button', {
        name: /log in/i,
      })).toBeInTheDocument();

      expect(screen.getByLabelText('E-Mail')).not.toBeUndefined();
      expect(screen.getByLabelText('Password')).not.toBeUndefined();
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      renderApp({ path: '/xxx' });

      expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it("doesn't call dispatch", () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });

  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';

    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('calls dispatch', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalled();
    });
  });
});
