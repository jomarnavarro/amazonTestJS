var By = require('selenium-webdriver').By,
  po = require('selenium-pageobject'),
  extend = po.extend,
  Element = po.elements.Element;

module.exports = (function(_super) {
  extend(AmazonPageModel, _super);

  function AmazonPageModel() {
    _super.apply(this, arguments);

    this.amazon_logo_img = this.ef.element(By.id('nav-logo')) ;
    this.search_box_txt = this.ef.textbox(By.id('twotabsearchtextbox'));
    this.search_btn = this.ef.element(By.xpath('//*[@id="navbar"]//input[@value="Go"]'));
  }

  return AmazonPageModel;
})(Element);
