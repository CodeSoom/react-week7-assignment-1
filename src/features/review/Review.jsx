import Button from '../shared/Button';
import TextBox from '../shared/TextBox';

export default function Review() {
  return (
    <div>
      <TextBox
        id="rating"
        labelText="평점"
        type="number"
        value=""
        name="rating"
        onChange={() => {}}
      />
      <TextBox
        id="comment"
        labelText="리뷰 내용"
        type="text"
        value=""
        name="comment"
        onChange={() => {}}
      />
      <Button onClick={() => {}}>리뷰 남기기</Button>
    </div>
  );
}
