const {test,expect} = require('@playwright/test');
 
test("Amazon Product Search" , async({context})=>
{
const page = await context.newPage();
await page.goto('https://www.amazon.in/');
await page.locator('//input[@aria-label="Search Amazon.in"]').fill("Iphone");
await page.locator('//input[@id="nav-search-submit-button"]').click();
//const get_List_Products = await(page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').allInnerTexts());
const textCont = await(page.locator('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[5]/div/div/span/div/div/div/div[2]/div/div/div[1]/h2/a/span').textContent());
console.log(textCont);
const count = await(page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').count());
 
//.nth(2).textContent()
 
const desired_text = "Apple iPhone 14 (128 GB) - Midnight";
console.log("Entering For LOOP");
for(let i = 0; i < count; i++)
 {
    console.log("Inside For LOOP");
    //console.log(get_List_Products[i]);
    const name = page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').nth(i).textContent();
    console.log(name);
    console.log(page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').nth(i).textContent());
 
    if (await page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').nth(i).textContent()===desired_text)
    {
        console.log("Inside IF Condition");
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            // This action triggers the new tab
            page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').nth(i).click()
          ])
        //await page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]').nth(i).click();
        //console.log('Element Clicked is :'+name)
        await newPage.waitForLoadState();
        console.log(await newPage.title());
        break;
    }
   
   
   
}
 
 
   
});
console.log("Code Executed Successfully");