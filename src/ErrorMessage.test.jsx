import React from 'react';

import { render } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders Error Message', () => {
    const message = '입력이 안된 사항이 있습니다.';

    const { container } = render(<ErrorMessage message={message} />);

    expect(container).toHaveTextContent('입력이 안된 사항이 있습니다.');
  });
});
