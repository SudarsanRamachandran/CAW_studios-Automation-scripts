const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();
  try {
    // Step 1: Open the URL
    await driver.get('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    await driver.manage().window().maximize();

    // Step 2: Click on "Table Data" button (using XPath)
    let tableDataButton = await driver.wait(until.elementLocated(By.xpath("//summary[contains(.,'Table Data')]")), 10000);
    await driver.wait(until.elementIsVisible(tableDataButton), 10000);
    await tableDataButton.click();
    await driver.sleep(2000)
    
    // Step 3: Click on the input text box (ID jsondata)
    let inputBox = await driver.wait(until.elementLocated(By.id('jsondata')), 5000);
    await driver.wait(until.elementIsVisible(inputBox), 5000);
    await inputBox.click();
    await driver.sleep(2000)

    // Step 4: Define the JSON data and enter it into the input box
    let inputData = [
      {"name" : "Bob", "age" : 20, "gender": "male"},
      {"name": "George", "age" : 42, "gender": "male"},
      {"name": "Sara", "age" : 42, "gender": "female"},
      {"name": "Conor", "age" : 40, "gender": "male"},
      {"name": "Jennifer", "age" : 42, "gender": "female"}
    ];
    let inputDataStr = JSON.stringify(inputData); // Convert data to string format for input
    await inputBox.clear(); // Clear any pre-existing text
    await driver.sleep(2000)
    await inputBox.sendKeys(inputDataStr);
    await driver.sleep(2000)
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    await driver.sleep(2000);

    // Step 5: Click the "Refresh Table" button (ID refreshtable)
    let refreshButton = await driver.wait(until.elementLocated(By.id('refreshtable')), 5000);
    await driver.wait(until.elementIsVisible(refreshButton), 5000);
    await refreshButton.click();
    await driver.sleep(2000)
    await driver.executeScript("window.scrollTo(0, 0);"); // Scroll to the top of the page
    await driver.sleep(5000);

    // Step 6: Fetch the data from the table and compare it with the input data
    let tableRows = await driver.findElements(By.css('#dynamictable tbody tr'));

    // Loop through the table rows and assert that the data matches the input
    for (let i = 0; i < tableRows.length; i++) {
      let cells = await tableRows[i].findElements(By.css('td'));

      let name = await cells[0].getText();
      let age = await cells[1].getText();
      let gender = await cells[2].getText();

      // Assertions to verify that table data matches input data
      assert.strictEqual(name, inputData[i].name, `Name in row ${i+1} does not match`);
      assert.strictEqual(parseInt(age), inputData[i].age, `Age in row ${i+1} does not match`);
      assert.strictEqual(gender.toLowerCase(), inputData[i].gender, `Gender in row ${i+1} does not match`);
    }

    console.log('Test Passed: Data matches successfully.');

  } catch (error) {
    console.error('Test Failed:', error);

  } finally {
    // Step 7: Close the browser
    await driver.quit();
  }
})();