# Amazon Test on Selenium JS

The following simple project implements a few simple example browser tests using selenium (see root folder), as well as a pretty basic POM amazonTest (product search).

## Prerequisites

In order to run this project, one must comply with the following prerequisites:

 * Install [npm](https://www.npmjs.com/get-npm)
 * Get the following packages:
   - Selenium WebDriver
   ```
   npm install selenium-webdriver
   ```
   - Mocha
   ```
   npm install mocha -g
   ```
   - Selenium Page Object
   ```
   npm install selenium-pageobject
   ```

## Running the files

Simple navigate to the root folder, and run the following commands:

* For firstSelenium.js
```
node firstSelenium.js
```
* For test_chaining.js
```
mv test_chaining.js test.js
mocha
```
After running, change filename back to test_chaining.js
```
mv test.js test_chaining.js
```
* For test_generators.js
```
mv test_generators.js test.js
mocha
```
After running, change filename back to test_generators.js
```
mv test.js test_generators.js
```
* For Amazon test
Navigate to the amazon_test folder and run mocha
```
cd amazon_test
mocha
```

Happy testing :)

