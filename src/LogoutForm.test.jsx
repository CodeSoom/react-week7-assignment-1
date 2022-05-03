import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();
  beforeEach(() => {
    handleClick.mockClear();
  });

  it('"Log out"버튼을 렌더한다.', () => {
    const { container } = render(
      <LogoutForm
        onClick={handleClick}
      />,
    );
    expect(container).toHaveTextContent('Log out');
  });

  it('클릭 이벤트를 감지한다.', () => {
    const { getByText } = render(
      <LogoutForm
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
