import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  given('categories', () => ([
    { id: 1, name: '한식' },
    { id: 2, name: '양식' },
  ]));
  given('selectedCategory', () => ({ id: 1, name: '한식' }));

  const handleClick = jest.fn();

  it('renders categories and checked symbol', () => {
    const { container, getByText } = render((
      <Categories
        categories={given.categories}
        selectedCategory={given.selectedCategory}
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('한식(V)');
    expect(container).toHaveTextContent('양식');

    fireEvent.click(getByText('양식'));

    expect(handleClick).toBeCalled();
  });
});
