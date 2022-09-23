import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const links = ['about', 'login', 'restaurants'];

  const renderHomePage = () => render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('renders links', () => {
    const { getAllByRole } = renderHomePage();

    const linkList = getAllByRole('link');

    linkList.forEach((link, index) => {
      expect(link.href).toContain(links[index]);
    });
  });
});
