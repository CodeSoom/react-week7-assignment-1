import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  given('label', () => '');
  given('fieldName', () => '');
  given('type', () => '');

  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderTextField() {
    return render(
      <TextField
        type={given.type}
        label={given.label}
        name={given.fieldName}
        inputValue=""
        onChange={handleChange}
      />,
    );
  }

  context('type이 없을 때', () => {
    given('label', () => '리뷰 설명');
    given('fieldName', () => 'description');
    given('type', () => undefined);

    it('라벨과 인풋을 렌더한다.', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
    });

    it('라벨과 text타입 인풋을 렌더한다.', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('type이 있을 때', () => {
    given('label', () => '평점');
    given('fieldName', () => 'score');
    given('type', () => 'number');

    it('라벨과 인풋을 렌더한다.', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('라벨과 입력한 type의 인풋을 렌더한다.', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });
  });

  it('"TextField"의 input 입력 이벤트를 감지한다.', () => {
    given('label', () => '평점');
    given('fieldName', () => 'score');
    given('type', () => 'number');

    const name = 'score';
    const value = '5';

    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
