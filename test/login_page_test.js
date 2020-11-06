Feature('LoginPage');

Scenario('로그인과 로그아웃', (I) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('로그인');

  I.see('로그아웃');
});

Scenario('로그아웃', (I) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('로그인');

  I.click('로그아웃');

  I.see('로그인', 'button');
});
