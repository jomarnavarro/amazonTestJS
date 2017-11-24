var By = require('selenium-webdriver').By,
  AmazonPageModel = require('./amazon_page_model');

  function AmazonHomePage(driver) {
      this._ui = new AmazonPageModel(driver, By.tagName('html'));

  }

  AmazonHomePage.prototype.search_product = function(product_name) {
    this._ui.search_box_txt.setValue(product_name);
    return this._ui.search_btn.click();
  };

  module.exports = AmazonHomePage;