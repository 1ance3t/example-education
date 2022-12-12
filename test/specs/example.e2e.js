const LoginPage = require('../pageobjects/login.page.js');
const Messages = require('../assets/messages.json');

describe('My Login application', () => {
  it('negative', async () => {
    await LoginPage.open();
    await LoginPage.login('d.mironov@tandp.ru', 'asdasdasd');
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(Messages.loginErrorMessage);
  });
  it('positive', async () => {
    await LoginPage.open();
    await LoginPage.login('d.mironov@tandp.ru', 'd.mironov@tandp.ru');
    await expect(LoginPage.userBlock).toBeDisplayed();
  });
});
