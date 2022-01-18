import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import Regions from './Regions';

describe('Regions', () => {
  given('regions', () => ([
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
  ]));
  given('selectedRegion', () => ({ id: 1, name: '서울' }));

  const handleClick = jest.fn();

  it('renders checked regions', () => {
    const { container, getByText } = render((
      <Regions
        regions={given.regions}
        selectedRegion={given.selectedRegion}
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('부산');

    fireEvent.click(getByText('부산'));

    expect(handleClick).toBeCalled();
  });
});
