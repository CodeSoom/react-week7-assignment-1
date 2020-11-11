import React from 'react';

import { render } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders Error Message', () => {
    const ERROR_MESSAGE = '입력이 안된 사항이 있습니다.';

    const { container } = render(<ErrorMessage message={ERROR_MESSAGE} />);

    expect(container).toHaveTextContent(ERROR_MESSAGE);
  });
});
