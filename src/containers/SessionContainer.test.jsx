import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SessionContainer from './SessionContainer';

import ACCESS_TOKEN from '../../fixtures/accessToken';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('SessionContainer', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render((
    <SessionContainer />
  ));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with access-token', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: ACCESS_TOKEN.accessToken,
        },
      }));
    });

    it('display access-token', () => {
      const { container } = renderComponent();
      expect(container).toHaveTextContent(ACCESS_TOKEN.accessToken);
    });

    it('display logout-button', () => {
      const { getByRole } = renderComponent();
      expect(getByRole('button', { name: '로그아웃' })).not.toBeNull();
    });

    context('when click logout-button', () => {
      it('fires submit event', () => {
        const { getByRole } = renderComponent();
        // When
        const logoutButton = getByRole('button', { name: '로그아웃' });
        fireEvent.click(logoutButton);
        // Then
        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });

  context('without access-token', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          accessToken: null,
        },
      }));
    });

    it('display login-form', () => {
      const { getByLabelText, getByRole } = renderComponent();
      expect(getByLabelText('E-Mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
      expect(getByRole('button', { name: 'Submit' })).not.toBeNull();
    });
  });
});
