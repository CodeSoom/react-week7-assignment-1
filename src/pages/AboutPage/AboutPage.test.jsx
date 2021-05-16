import React from 'react';

import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders title', () => {
    render(<AboutPage />);

    expect(screen.getByText('About 페이지')).toBeInTheDocument();
  });
});
