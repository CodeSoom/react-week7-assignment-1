// import { useDispatch, useSelector } from 'react-redux';

// import {
//   selectCategory,
//   loadRestaurants,
// } from './actions';

// import { get } from './utils';

export default function LoginFormContainer() {
  // const dispatch = useDispatch();

  // const categories = useSelector(get('categories'));
  // const selectedCategory = useSelector(get('selectedCategory'));

  // function handleClick(categoryId) {
  //   dispatch(selectCategory(categoryId));
  //   dispatch(loadRestaurants());
  // }

  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="email"
          id="login-email"
          name="email"
        />
      </div>
    </>

  );
}
