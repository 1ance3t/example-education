const LoginPage = require('../pageobjects/login.page.js');
const TopicsPage = require('../pageobjects/topics.page.js');

describe('My Login application', () => {
  before('Login', async () => {
    await LoginPage.open();
    await LoginPage.login('d.mironov@tandp.ru', 'd.mironov@tandp.ru');
    await expect(LoginPage.userBlock).toBeDisplayed();
  });

  it('negative', async () => {
    await TopicsPage.open();
    await TopicsPage.addImage('./maxresdefault.jpg');
  });
});
