import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  const handleOnClick = jest.fn();

  const renderComponent = ({ name }) => render((
    <Button name={name} onClick={handleOnClick} />
  ));

  beforeEach(() => {
    handleOnClick.mockClear();
  });

  it('display button', () => {
    const { getByRole } = renderComponent({ name: '이름' });
    expect(getByRole('button')).not.toBeNull();
  });

  context('when click button', () => {
    it('fires click event', () => {
      const { getByRole } = renderComponent({ name: '이름' });
      // When
      const button = getByRole('button');
      fireEvent.click(button);
      // Then
      expect(handleOnClick).toBeCalledTimes(1);
    });
  });
});
