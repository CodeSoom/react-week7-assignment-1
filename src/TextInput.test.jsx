import { render } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput', () => {
  const handleChange = jest.fn();

  function renderTextInput({
    id = '',
    type = 'text',
    label = '',
    name = '',
    value = '',
    onChange = handleChange,
  }) {
    return render((
      <TextInput
        id={id}
        type={type}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const controls = {
    EMAIL: {
      id: 'login-email',
      label: 'E-Mail',
      type: 'email',
      name: 'email',
      value: 'tester@example.com',
    },
    PASSWORD: {
      id: 'login-password',
      label: 'Password',
      type: 'password',
      name: 'password',
      value: 'test',
    },
    SCORE: {
      id: 'review-score',
      label: '평점',
      type: 'number',
      name: 'score',
      value: 5,
    },
    DESCRIPTION: {
      id: 'review-description',
      label: '리뷰 내용',
      type: 'text',
      name: 'description',
      value: '맛있어요!!',
    },
  };

  context('with values', () => {
    it('renders text input', () => {
      Object.keys(controls).forEach((control) => {
        const { label, value } = controls[control];
        const { queryByLabelText } = renderTextInput(controls[control]);

        expect(queryByLabelText(label)).not.toBeNull();
        expect(queryByLabelText(label)).toHaveValue(value);
      });
    });
  });
});
