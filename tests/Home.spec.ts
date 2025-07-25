/*

const { test, expect } = require('@playwright/test');

test('Home', async ({ page }) => {
  await page.goto('https://automationteststore.com/');

  const pageTitle = await page.title();
  console.log('Page title is', pageTitle);

  await expect(page).toHaveTitle('A place to practice your automation skills!');

  const pageURL = await page.url();
  console.log('Page URL is', pageURL);

  await expect(page).toHaveURL('https://automationteststore.com/');
});


DAY -2 
-> Property
-> CSS
-> Xpath

DAY-3

-> page.getByAltText() - to locate an element, usually image, by its text alternative.
-> page.getByPlaceholder() - to locate an input by placeholder.
-> page.getByRole() to locate by explicit and implicit accessibility attributes.
-> page.getByText() to locate by text content.

-> page.getByLabel() to locate a form control by associated label's text.
-> page.getByTitle() to locate an element by its title attribute.
-> page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured

////////////////////////

import { test, expect } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // const logo = await page.getByAltText('orangehrm-logo'); // Correct the alt text here if needed
  // await expect(logo).toBeVisible();

  await page.getByPlaceholder('Username').fill('admin')
  await page.getByPlaceholder("Password").fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

await expect(page.getByAltText('john desuza')).toBeVisible();


});





DAY - 6

npx playwright codegen -o tests/newfile.spec.js

npx playwright codegen --device "iPhone 13"  --iphone 


npx playwright codegen --viewport-size "1280,720"
DAY- 7

ASSERTIOBNS

HARD ASSERTIONS -> One step is failed nect step not execute

1) expect(page).toHaveURL()                Page has URL
2) expect(page).toHaveTitle()              Page has title
3) expect(locator).toBeVisible()           Element is visible
4) expect(locator).toBeEnabled()           Control is enabled
5) expect(locator).toBeChecked()           Radio/Checkbox is checked
6) expect(locator).toHaveAttribute()       Element has attribute
7) expect(locator).toHaveText()            Element matches text
8) expect(locator).toContainText()         Element contains text
9) expect(locator).toHaveValue(value)      Input has a value
10) expect(locator).toHaveCount()          List of elements has given  (Mainly useful for dropdown)


NEGATIVE ASSERTIONS

expect(page).not.toHaveURL() 
expect(page).not.toHaveTitle()   -- not will use for all assertions






const { test, expect } = require('@playwright/test');

test('Home', async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/register')
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')


await expect(page).toHaveTitle('nopCommerce demo store. Register')
const logo=await page.locator('.header-logo')
await expect(logo).toBeVisible()

const searchbox=await page.locator('#small-searchterms')
await expect(searchbox).toBeEnabled()
const radio=await page.locator('#gender-female')
await radio.click()
await expect(radio).toBeChecked()

//check box

const news=await page.locator('#Newsletter')
await expect (news).toBeChecked()

//attribute

const register=await page.locator('#register-button')
await expect(register).toHaveAttribute('type','submit')

// have text (full want to send )

await expect (await page.locator('.page-title h1')).toHaveText('Register')

//contains ( partial like "re")

await expect (await page.locator('.page-title h1')).toHaveText('Register')

const email=await page.locator('#Email')
await email.fill('test@demo.com')
await expect(email).toHaveValue('test@demo.com')

})




import { executionAsyncResource } from "async_hooks"

DAY - 8

SOFT ASSERTIONS - one step is failed next step we can execute  (not terminate your execution)




const { test, expect } = require('@playwright/test');

test('Home', async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/register')
await expect.soft(page).toHaveTitle('ner')  //it is wrong but still execute
const logo=await page.locator('.header-logo')
await expect.soft(logo).toBeVisible()

})


DAY-9

Handle input box and radio buttons

page.locator("//input").fill("value") or

page.fill("//input","value");


await page.waitForTimeout(5000)  -- Pausing code

await page.check("//input");   -- Checked or not
await page.locator('//input').check();
await expect(await page.locator('//input').toBeChecked()

await expect(await page.locator('//input').isChecked().toBeTruthy();
await expect(await page.locator('//input').isChecked().toBeFalsy();   - radio button not checked 




DAY -10 
CHECKBOXES

await expect(await page.locator('//input').toBeChecked()

await expect(await page.locator('//input').isChecked().toBeTruthy();
await expect(await page.locator('//input').isChecked().toBeFalsy();   - radio button not checked


MULTIPLE CHECKBOXES

const checkboxes =[
            "//input1'
            "//input4'
            "//input2'
            ]



for(const locator of checkboxes)         // select multibox
{ 
await page.locator(locator).check();
}



for(const locator of checkboxes)           //uncheck
{
if(await page.locator(locator).ischecked())
{
await page.locator(locator).uncheck();
}



import { validateHeaderValue } from "http"
import { text } from "stream/consumers"

DAY - 11

DROPDOWNS

1) Select by visible text
2) select by text
3) select by validateHeaderValue
4) select by index
5) select by label /visible text

await page.locator('#country').selectOption({label:'india'}); // visible text
await page.locator('#country').selectOption({'india'})    // directly pass visible text

await page.locator('#country').selectOption({value:'india'})   // select by value

await page.locator('#country').selectOption({index:1})   // select by  index

await pageXOffset.selectOption('#coubtry','india')   //by text

await page.waitForTimeout(5000);



// Assertions

//Check no.of options in dropdown  - Appr 1

const options=await page.locator('#country')   
await expect(options).toHaveCount(10);

//Check n.o of options in dropdown --appr 2

const options=await page.$$('#country')
console.log("no of options",options.length) or

await expect(options.length).toBe(10);



//3) Check presence of value in dropdown


const { test, expect } = require('@playwright/test');

test('Home', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')

const content=await page.locator('#country').textContent()
await expect(content.includes('India')).toBeTruthy();

})
*/

// Check presence of value in dropdown

const { test, expect } = require('@playwright/test');

test('Check France in country dropdown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');


  /*


  const options = await page.$$('#country option');
  let status = false;

  for (const option of options) {
    const value = await option.textContent();
    if (value.includes('France')) {
      status = true;
      break;
    }
  }

  expect(status).toBeTruthy();
});

*/


//dropdown using loop 


  const options = await page.$$('#country option');

  for (const option of options) {
    let value = await option.textContent();
    if (value.includes('France')) {
      await page.selectOption('#country',value);
      break;
    }
  }

  expect(status).toBeTruthy();
  await page.waitForTimeOut(5000);
});






