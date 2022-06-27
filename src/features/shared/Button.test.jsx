import { render } from '@testing-library/react';

import Button from './Button';

test('Button', () => {
  const handleClick = jest.fn();

  const { getByRole } = render(
    <Button
      value="value"
      onClick={handleClick}
    >
      클릭
    </Button>,
  );

  expect(getByRole('button')).toHaveTextContent('클릭');
});
