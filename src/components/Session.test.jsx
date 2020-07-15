import React from 'react';

import { render } from '@testing-library/react';

import Session from './Session';

import ACCESS_TOKEN from '../../fixtures/accessToken';

describe('<Session />', () => {
  const renderComponent = ({ accessToken }) => render((
    <Session accessToken={accessToken} />
  ));

  context('with access-token', () => {
    it('display Access Token', () => {
      const { container } = renderComponent({ accessToken: ACCESS_TOKEN.accessToken });
      expect(container).toHaveTextContent(ACCESS_TOKEN.accessToken);
    });
  });

  context('without access-token', () => {
    it('display \'No Access Token\' message', () => {
      const { container } = renderComponent({ accessToken: null });
      expect(container).toHaveTextContent('no-access-token');
    });
  });
});
