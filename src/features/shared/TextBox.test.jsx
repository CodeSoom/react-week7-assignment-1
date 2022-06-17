import { render } from '@testing-library/react';

import TextBox from './TextBox';

test('TextBox', () => {
  const handleChange = jest.fn();

  const { getByLabelText } = render(
    <TextBox
      id="email"
      labelText="Email"
      type="email"
      value="입력"
      name="email"
      onChange={handleChange}
    />,
  );

  expect(getByLabelText('Email')).toBeInTheDocument();
});
