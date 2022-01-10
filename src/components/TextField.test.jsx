import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="E-mail"
          type="email"
          name="email"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('E-mail')).toBeInTheDocument();
    });

    it('renders type with attribute input', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="email"');
    });
  });

  context('without type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="리뷰 설명"
          name="description"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 설명')).toBeInTheDocument();
    });

    it('renders text type with attribute input', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  it('type input, calls onChanage handler', () => {
    const { getByLabelText } = render((
      <TextField
        label="E-mail"
        type="email"
        name="email"
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'changed email' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'changed email',
    });
  });
});
