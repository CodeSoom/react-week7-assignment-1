import { fireEvent, render } from '@testing-library/react';
import Form from '.';

describe('Form', () => {
  it('renders children', () => {
    const children = <button type="submit">Submit</button>;

    const { getByText } = render(<Form>{children}</Form>);

    expect(getByText('Submit')).toBeInTheDocument();
  });

  context('when the submit event is called', () => {
    it('calls onSubmit', () => {
      const handleSubmit = jest.fn();
      const children = <button type="submit">Submit</button>;

      const { getByText } = render(<Form onSubmit={handleSubmit}>{children}</Form>);

      fireEvent.click(getByText('Submit'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
