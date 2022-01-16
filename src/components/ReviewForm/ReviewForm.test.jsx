import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('평점, 이름, 후기 폼을 보여준다.', () => {
    const score = 1;
    const name = '홍길동';
    const description = '좋아요';
    const { getByLabelText, getByDisplayValue } = render((
      <ReviewForm
        score={score}
        name={name}
        description={description}
      />
    ));

    expect(getByLabelText(/평점/)).not.toBeNull();
    expect(getByLabelText(/이름/)).not.toBeNull();
    expect(getByLabelText(/후기/)).not.toBeNull();
    expect(getByDisplayValue(score)).not.toBeNull();
    expect(getByDisplayValue(name)).not.toBeNull();
    expect(getByDisplayValue(description)).not.toBeNull();
  });

  it('input 상태를 변경하는 경우 onChange함수를 실행한다.', () => {
    const score = 1;
    const name = '홍길동';
    const description = '좋아요';
    const onChange = jest.fn();

    const { getByLabelText } = render(<ReviewForm onChange={onChange} />);

    const scoreInput = getByLabelText(/평점/);
    const nameInput = getByLabelText(/이름/);
    const descriptionInput = getByLabelText(/후기/);

    fireEvent.change(scoreInput, { target: { value: score } });
    expect(onChange).toBeCalledWith('score', score);

    fireEvent.change(nameInput, { target: { value: name } });
    expect(onChange).toBeCalledWith('name', name);

    fireEvent.change(descriptionInput, { target: { value: description } });
    expect(onChange).toBeCalledWith('description', description);
  });

  it('작성 버튼을 누른 경우 onSubmit함수를 실행한다.', () => {
    const onSubmit = jest.fn();

    const { getByText } = render(<ReviewForm onSubmit={onSubmit} />);

    fireEvent.click(getByText('작성'));
    expect(onSubmit).toBeCalled();
  });
});
