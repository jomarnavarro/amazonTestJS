const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
describe('Google search', function() {
    let driver;
    this.timeout(15000);

    test.before(function*() {
      driver = yield new Builder()
        .forBrowser('firefox')
        .build();
    });

    test.it('example', function* theTestFunction() {
      yield driver.get('http://www.google.com/ncr');
      yield driver.findElement(By.name('q')).sendKeys('webdriver');
      yield driver.findElement(By.name('btnK')).click();
      yield driver.wait(until.titleContains('webdriver'), 1000);
    });

    test.after(function*() {
      yield driver.quit();
    });
});