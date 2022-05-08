Feature('LoginPage');

Scenario('로그인과 로그아웃', ({ I }) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('Log In');

  I.see('Log out');
});

Scenario('로그아웃', async ({ I }) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('Log In');

  I.click('Log out');

  await I.see('Log In', 'button');
});
