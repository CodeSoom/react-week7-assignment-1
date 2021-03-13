import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import given from 'given2';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const renderReviewFormContainer = () => render(<ReviewFormContainer />);

  given('accessToken', () => '');

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    it('renders a message for user to log in', () => {
      renderReviewFormContainer();

      expect(screen.getByText('로그인을 해주세요.')).toBeInTheDocument();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'tdd는재밌다');

    it('renders ReviewFormContainer', () => {
      renderReviewFormContainer();

      expect(screen.getByLabelText('평점')).toBeInTheDocument();
      expect(screen.getByLabelText('리뷰 내용')).toBeInTheDocument();
      expect(screen.getByRole('button', {
        name: /리뷰 남기기/,
      })).toBeInTheDocument();
    });
  });
});
