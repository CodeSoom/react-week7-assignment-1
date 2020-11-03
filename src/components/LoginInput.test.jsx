import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginInput from './LoginInput';

describe('LoginInput', () => {
  const renderLoginInput = (value) => render(
    <LoginInput value={value} />,
  );

  context('with value', () => {
    it('renders green', () => {
      renderLoginInput('value');

      expect(screen.getByText('green')).toBeInTheDocument();
    });
  });

  context('without field', () => {
    it('renders red', () => {
      renderLoginInput();

      expect(screen.getByText('red')).toBeInTheDocument();
    });
  });
});
