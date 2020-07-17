Feature('LoginPage');

Scenario('로그인', (I) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('Log In');
});
