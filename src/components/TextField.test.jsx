import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField({ label, name, type }) {
    return render((
      <TextField
        label={label}
        name={name}
        type={type}
        onChange={handleChange}
      />
    ));
  }

  context('with type', () => {
    it('number-type인 리뷰 작성 폼이 보여집니다.', () => {
      const { queryByLabelText, container } = renderTextField({
        label: '평점',
        name: 'score',
        type: 'number',
      });
      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number');
    });
  });

  context('without type', () => {
    it('text-type인 리뷰 작성 폼이 보여집니다.', () => {
      const { queryByLabelText, container } = renderTextField({
        label: '리뷰 설명',
        name: 'description',
      });
      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
      expect(container).toContainHTML('type="text');
    });
  });

  it('input의 내용이 바뀌면 onChange이벤트가 호출됩니다.', () => {
    const name = 'score';
    const value = '5';

    const { getByLabelText } = renderTextField(
      {
        label: '평점',
        name,
      },
    );

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
