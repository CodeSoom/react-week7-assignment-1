import React from 'react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const links = ['About', 'Restaurants'];

  const renderHomePage = () => render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  context('without accessToken', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: null,
      }));
    });

    it('renders Login Link', () => {
      const { container } = renderHomePage();

      expect(container).toHaveTextContent('Login');
    });
  });

  context('with accessToken', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'ACCESS_TOKEN',
      }));
    });

    it('renders Logout Link', () => {
      const { container } = renderHomePage();

      expect(container).toHaveTextContent('Logout');
    });
  });

  it('renders links', () => {
    const { container } = renderHomePage();

    links.forEach((link) => {
      expect(container).toHaveTextContent(link);
    });
  });
});
