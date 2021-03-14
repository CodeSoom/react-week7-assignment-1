import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import given from 'given2';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

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
      render(<ReviewFormContainer />);

      expect(screen.getByText('로그인을 해주세요.')).toBeInTheDocument();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'tdd는재밌다');

    it('renders review form', () => {
      render(<ReviewFormContainer />);

      expect(screen.getByLabelText('평점')).toBeInTheDocument();
      expect(screen.getByLabelText('리뷰 내용')).toBeInTheDocument();
      expect(screen.getByRole('button', {
        name: '리뷰 남기기',
      })).toBeInTheDocument();
    });

    it('exectues dispatch upon submission', async () => {
      render(<ReviewFormContainer />);

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

      await waitFor(() => fireEvent.submit(screen.getByRole('button', {
        name: '리뷰 남기기',
      })));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
