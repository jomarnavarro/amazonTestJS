const {Builder, By, until} = require('selenium-webdriver');
var PageNavigator = require('selenium-pageobject').PageNavigator,
  AmazonHomePage = require('./amazon_home_page.js');
const test = require('selenium-webdriver/testing');
describe('Amazon search', function() {
    let driver;
    var amazon_url = 'https://www.amazon.com/';
    var product = 'tablet';
    this.timeout(15000);

    test.before(function*() {
      driver = yield new Builder()
        .forBrowser('firefox')
        .build();
        yield driver.get(amazon_url);
    });

    test.it('Search Tablet', function* theTestFunction() {
      yield pageNavigator = new PageNavigator({driver: driver});
      yield amazonHomePage = new AmazonHomePage(driver);
      yield pageNavigator.visit(amazon_url)
      yield amazonHomePage.search_product(product);
    });

    test.after(function*() {
      yield driver.quit();
    });
});