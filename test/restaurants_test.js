const assert = require('assert');

Feature('Restaurant');

Scenario('카테고리와 지역을 모두 선택하면 레스토랑 목록을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/restaurants');

  I.click('서울');
  I.click('한식');

  I.see('한국식 초밥');

  I.click('부산');
  I.see('밀면넘어져요');
});

Scenario('레스토랑 상세 페이지로 이동합니다.', async ({ I }) => {
  I.amOnPage('/restaurants');

  I.click('서울');
  I.click('중식');

  I.see('양천주가');

  I.click('양천주가');

  const url = await I.grabCurrentUrl();

  assert.equal(/\/restaurants\/\d/.test(url), true);
});
