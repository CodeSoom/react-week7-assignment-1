Feature('LogoutPage');

Scenario('로그아웃', (I) => {
  I.amOnPage('/logout');

  I.click('LogOut');

  I.see('LogOut 되었습니다.');
});
