import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { get } from '../utils';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    accessToken: '',
  }));

  const renderLoginContainer = () => (
    render(<LoginContainer />)
  );

  beforeEach(() => {
  });

  it('"로그인" 버튼을 클릭하면, 로그인 액션이 실행된다.', () => {
    renderLoginContainer();
  });
});
