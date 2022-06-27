import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) =>
      selector({
        loginFields: {
          email: 'test@test',
          password: '12345',
        },
      })
    );
  });

  it('it renders Login title', () => {
    const { container } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(container).toHaveTextContent('Login');
  });

  it('it renders input control', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(getByLabelText('E-mail')).not.toBeNull();
  });
});
