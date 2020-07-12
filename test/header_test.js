Feature('Header');

const pages = [
  '/restaurants',
  '/about',
  '/not-exist',
];

Scenario('헤더를 클릭하면 메인 페이지로 돌아옵니다.', (I) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('헤더');

    I.see('Home');
  });
});
