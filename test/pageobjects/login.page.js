const Page = require('./page');

class LoginPage extends Page {
  get usernameInput() {
    return $('//input[@data-qa="username"]');
  }

  get passwordInput() {
    return $('//input[@data-qa="password"]');
  }

  get loginBtn() {
    return $('//button[@data-qa="loginBtn"]');
  }

  get userBlock() {
    return $('//a[@data-qa="userBlock"]');
  }

  get errorMessage() {
    return $('//div[@class="ant-form-explain"]');
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginBtn.click();
  }

  open() {
    return super.open('user-login/auth');
  }
}

module.exports = new LoginPage();
