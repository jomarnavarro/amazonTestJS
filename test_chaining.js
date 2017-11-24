const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

describe('Google Search', googleSearchTest);

function googleSearchTest() {
  let driver;
  
  before(setUp);

  it('example', testGoogleSearch);

  after(tearDown);

}

function setUp() {
  return new Builder()
    .forBrowser('firefox')
    .build()
    .then(d => {
      driver = d;
    });
}

function testGoogleSearch() {
  return driver.get('http://www.google.com/ncr')
    .then(_ => driver.findElement(By.name('q')))
    .then(q => q.sendKeys('webdriver'))
    .then(_ => driver.findElement(By.name('btnK')))
    .then(b => b.click())
    .then(_ => driver.wait(until.titleContains('webdriver'), 1000));
}

function tearDown() {
  return driver.quit();
}
