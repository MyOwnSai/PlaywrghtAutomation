const {test,expect} = require('@playwright/test');

test('window handle' , async({page})=>
{

    await page.goto('https://practice.expandtesting.com/windows');
    await page.locator('//a[text()="Click Here"]').click();

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()])

    const get_new_WebPage_Text = await page.locator('//h1[text()="Example of a new window"]').textContent();
    console.log(get_new_WebPage_Text);







}
)