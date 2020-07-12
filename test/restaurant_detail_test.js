Feature('RestaurantDetail');

const menus = ['탕수육', '팔보채'];

Scenario('레스토랑 정보, 메뉴, 리뷰 목록을 볼 수 있다.', (I) => {
  I.amOnPage('/restaurants/1');

  I.see('양천주가');
  I.see('서울 강남구');

  menus.forEach((menu) => {
    I.see(menu);
  });

  I.see('테스터');
});

Scenario('로그인을 안했으면 리뷰를 남길 수 없다.', (I) => {
  I.amOnPage('/restaurants/1');

  I.dontSee('리뷰 남기기');
});

Scenario('로그인을 했으면 리뷰를 남길 수 있다.', (I) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('Log In', 'button');

  I.see('Log out', 'button');

  I.amOnPage('/restaurants/1');

  I.fillField('score', '1');
  I.fillField('description', '리뷰 내용');
  I.see('리뷰 남기기', 'button');
});