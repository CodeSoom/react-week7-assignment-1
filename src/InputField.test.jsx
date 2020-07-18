import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('without type', () => {
    function renderInputField({ label, name }) {
      return render((
        <InputField
          label={label}
          name={name}
          onChange={handleChange}
        />
      ));
    }

    it('renders input fields', () => {
      const label = '리뷰 내용';
      const name = 'description';

      const { getByLabelText } = renderInputField({ label, name });

      const attributes = [
        { attribute: 'type', value: 'text' },
        { attribute: 'id', value: `input-${name}` },
        { attribute: 'name', value: name },
      ];

      attributes.forEach(({ attribute, value }) => {
        expect(getByLabelText(label)).toHaveAttribute(attribute, value);
      });
    });

    it('listens change events', () => {
      const label = '리뷰 내용';
      const name = 'description';

      const { getByLabelText } = renderInputField({ label, name });

      fireEvent.change(getByLabelText(label), {
        target: { value: 'good!' },
      });

      expect(handleChange).toBeCalledWith({ name, value: 'good!' });
    });
  });

  context('with type', () => {
    function renderInputField({ label, type, name }) {
      return render((
        <InputField
          label={label}
          type={type}
          name={name}
          onChange={handleChange}
        />
      ));
    }

    it('renders input fields', () => {
      const label = '평점';
      const type = 'number';
      const name = 'score';

      const { getByLabelText } = renderInputField({ label, type, name });

      const attributes = [
        { attribute: 'type', value: type },
        { attribute: 'id', value: `input-${name}` },
        { attribute: 'name', value: name },
      ];

      attributes.forEach(({ attribute, value }) => {
        expect(getByLabelText(label)).toHaveAttribute(attribute, value);
      });
    });

    it('listens change events', () => {
      const label = '평점';
      const type = 'number';
      const name = 'score';

      const { getByLabelText } = renderInputField({ label, type, name });

      fireEvent.change(getByLabelText(label), {
        target: { value: '5' },
      });

      expect(handleChange).toBeCalledWith({ name, value: '5' });
    });
  });
});
