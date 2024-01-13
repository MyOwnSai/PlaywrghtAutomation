const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/loginPage');
const { launchURL1 } = require('../Pages/launchURL1');
const { selector_Class } = require('../Pages/selectClass');

test.describe.configure({ mode: 'serial' });

var page;
test.beforeAll('beforeAll', async ({ browser }) => {
    page = await browser.newPage();


})

test('launch Addactin url', async () => {

    // Page Url
    const lp1 = new launchURL1(page);
    await lp1.goToURL();

})

test('login page', async () => {
    //to set assert for validate the url
    //const current_Url = await page.url();
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');

    const get_title = await page.title();
    console.log(get_title);
    const exp_title = "Adactin.com - Hotel Reservation System";

    if (get_title == exp_title) {
        const login_build_verification = await page.locator('//td[text()="Existing User Login - Build 1"]').textContent();
        console.log("Page login build verified : " + login_build_verification);
        await expect(page.locator('//td[text()="Existing User Login - Build 1"]')).toHaveText('Existing User Login - Build 1');
        const name = "saiGoutham123";
        const pwd = "Jawa@123";

        const lp = new LoginPage(page);
        await lp.userNM(name);
        await page.locator('//input[@id="password"]').fill('Jawa@123');
        await page.getByRole('button', { name: 'login' }).click();
        console.log("Successfully login");
    }
    else {
        console.log("Something Wrong with login need to check");
    }



})

test('search hotel', async () => {
    await expect(page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php');
    await expect(page).toHaveTitle('Adactin.com - Search Hotel');
    const locatOption = 2;
    const lp1 = new selector_Class(page);
    await lp1.hotel_Location(locatOption);

    const dropdown_hotel = await page.locator('//select[@name="hotels"]').selectOption('Hotel Creek');
    console.log('The selected hotel Option is : ' + dropdown_hotel);

    const dropdown_room_type = await page.locator('//select[@name="room_type"]').selectOption({ index: 1 });
    console.log('The Selected Room Type is : ' + dropdown_room_type);

    const dropdown_no_of_room = await page.locator('//select[@name="room_nos"]').selectOption('2');
    console.log('The Selected No of rooms : ' + dropdown_no_of_room);

    const dropdown_adults_per_room = await page.locator('//select[@name="adult_room"]').selectOption({ index: 2 });
    console.log('The number of adults : ' + dropdown_adults_per_room);

    const dropdown_childrens_per_room = await page.locator('//select[@name="child_room"]').selectOption('2');
    console.log('The number of childrens : ' + dropdown_childrens_per_room);

    // await expect(page.locator('//input[@id="Submit"]')).toBeDisabled('Search');
    await page.locator('//input[@id="Submit"]').click();

    console.log('Search Button is clicked');

})

test('Select hotel', async () => {

    await expect.soft(page).toHaveURL('http://adactinhotelapp.com/SelectHotel.php');
    await expect.soft(page).toHaveTitle('Adactin.com - Select Hotel');


    const check_the_radio_button_is_selected = await page.locator('//input[@type="radio"]').isChecked();
    console.log("is radio button selected : " + check_the_radio_button_is_selected);
    if (check_the_radio_button_is_selected == false) {
        await page.check('//input[@type="radio"]');
        const check_the_radio_button_is_select = await page.locator('//input[@type="radio"]').isChecked();
        console.log("is radio button selected : " + check_the_radio_button_is_select);

    }
    else {
        console.log("Need To Check");
    }

    await page.getByRole('button', { name: 'continue' }).click();
    console.log("After Select the hotel search button is clicked")


})

test('Book hotel page', async () => {

    await expect(page).toHaveURL('http://adactinhotelapp.com/BookHotel.php');
    console.log('The Book hotel url is matched');
    await expect(page).toHaveTitle('Adactin.com - Book A Hotel');
    console.log('The Book Hotel Title is matched');


})


test.afterEach('After Each', async ({ }, testInfo) => {

    console.log(`Finished ${testInfo.title}`);
    console.log(`Status ${testInfo.status}`);


})

test.afterAll('close browser', async () => {
    //close the browser
    await page.close();
})