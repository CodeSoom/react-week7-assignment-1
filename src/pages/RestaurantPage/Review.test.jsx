import { render } from '@testing-library/react';
import Review from './Review';

describe('Review', () => {
  it('renders name, score and description', () => {
    const { getByText } = render(<Review review={{ name: '테스터', score: 5, description: '좋아요' }} />);

    expect(getByText('테스터')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('좋아요')).toBeInTheDocument();
  });
});
