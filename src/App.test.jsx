import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getItemFromStorage } from './services/storage';

import App from './App';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  function renderComponent({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: RESTAURANT,
      session: {
        accessToken: null,
      },
    }));
  });

  describe('with any page', () => {
    it('has header', () => {
      const { queryByText } = renderComponent({ path: '/' });
      expect(queryByText('헤더')).not.toBeNull();
    });
  });

  describe('with path /', () => {
    it('renders Home Page', () => {
      renderComponent({ path: '/' });
    });
  });

  describe('with path /about', () => {
    it('renders About Page', () => {
      renderComponent({ path: '/about' });
    });
  });

  describe('with path /restaurants', () => {
    it('renders Restaurant List Page', () => {
      renderComponent({ path: '/restaurants' });
    });
  });

  describe('with path /restaurant/1', () => {
    it('renders Restaurant View Page', () => {
      renderComponent({ path: '/restaurants/1' });
    });
  });

  describe('with path /login', () => {
    it('renders Login Page', () => {
      renderComponent({ path: '/login' });
    });

    context('when storage has access-token', () => {
      beforeEach(() => {
        getItemFromStorage.mockImplementation(() => 'ACCESS_TOKEN');
      });

      it('renders Login Page with Auto Login', () => {
        renderComponent({ path: '/login' });
        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
