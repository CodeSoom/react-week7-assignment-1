import { render } from '@testing-library/react';

import LogInPage from './LogInPage';

describe('LogInPage', () => {
  it('renders title', () => {
    const { container } = render(<LogInPage />);

    expect(container).toHaveTextContent('Log In');
  });
});
