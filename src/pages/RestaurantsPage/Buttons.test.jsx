import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { REGIONS } from '@fixtures';
import Buttons from './Buttons';

describe('Buttons', () => {
  const handleClick = jest.fn();

  const renderButtons = (buttons, selected) => render((
    <Buttons
      buttons={buttons}
      handleClick={handleClick}
      selected={selected}
    />
  ));

  it('calls handleClick function as many as buttons', () => {
    const { getByText } = renderButtons(REGIONS);

    REGIONS.forEach(({ name }) => {
      fireEvent.click(getByText(name));
    });

    expect(handleClick).toBeCalledTimes(REGIONS.length);
  });

  it('renders (V) along the selected item', () => {
    const { queryByText } = renderButtons(REGIONS, REGIONS[0]);

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
