const {test,expect}=require('@playwright/test');

test('Home',async({page})=>{       //page is fixture  ... promise will intialize
   await page.goto('https://www.demoblaze.com/');  //await will wait till the page loaded(promise)
   
})