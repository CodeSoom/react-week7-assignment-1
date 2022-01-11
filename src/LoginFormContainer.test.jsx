// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  context('with onClick event', () => {
    it('calls dispatch to change state', () => {
      const { container } = render((
        <LoginFormContainer />
      ));
    });
  });
});
