import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Log out" button', () => {
    const handleClick = jest.fn();

    const { container } = render(<LogoutForm onClick={handleClick} />);

    expect(container).toHaveTextContent('Log out');
  });

  context('when button is clicked', () => {
    it('makes user log out', () => {
      const handleClick = jest.fn();

      const { getByText } = render((
        <LogoutForm onClick={handleClick} />
      ));

      fireEvent.click(getByText('Log out'));

      expect(handleClick).toBeCalled();
    });
  });
});
