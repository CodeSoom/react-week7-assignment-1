import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import given from 'given2';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  const renderReviewFormContainer = () => render(<ReviewFormContainer />);

  given('accessToken', () => '');

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));

    useDispatch.mockImplementation(() => dispatch);
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
        name: '리뷰 남기기',
      })).toBeInTheDocument();
    });

    it('exectues dispatch upon submission', async () => {
      renderReviewFormContainer();

      fireEvent.input(screen.getByRole('spinbutton', {
        name: '평점',
      }), {
        target: {
          value: '5',
        },
      });

      fireEvent.input(screen.getByRole('textbox', {
        name: '리뷰 내용',
      }), {
        target: {
          value: '존맛탱',
        },
      });

      await act(async () => {
        fireEvent.submit(screen.getByRole('button', {
          name: '리뷰 남기기',
        }));
      });

      expect(dispatch).toBeCalled();
    });
  });
});
