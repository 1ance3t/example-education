const Page = require('./page');

class TopicsPage extends Page {
  get addTopicBtn() {
    return $('//button[@data-qa="addTopic"]');
  }

  get imageInput() {
    return $('#cover-img-file-input');
  }

  get saveImageBtn() {
    return $(
      '//button[@class="ant-btn styles--Btn--2N7Hgz_V styles--Btn-orange--3MXobhtL ant-btn-primary"]'
    );
  }

  async display() {
    await browser.execute(
      () =>
        (document.getElementById('cover-img-file-input').style.display =
          'block')
    );
  }

  async addImage(file) {
    await this.addTopicBtn.waitForClickable();
    await this.addTopicBtn.click();
    const remoteFilePath = await browser.uploadFile(file);
    await this.display();
    await this.imageInput.setValue(remoteFilePath);
    await this.saveImageBtn.waitForClickable();
    await this.saveImageBtn.click();
    await browser.pause(5000);
  }

  open() {
    return super.open('topics');
  }
}

module.exports = new TopicsPage();
