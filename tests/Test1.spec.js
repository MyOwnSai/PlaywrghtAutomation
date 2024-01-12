const {test,expect} = require('@playwright/test');   // to create playwrite folder

test('Adactin title Assertion',async({page})=>
{

    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    await page.locator('id=username').type('Goutham420');
    await page.locator('id=password').fill('Jawa@420');
    await page.locator('id=login').click();
    // const forgetLink = await(await page.locator('//a[text()="Forgot Password?"]').textContent()).trim();
    // expect(forgetLink).toBe('Forgot Password?');
    // console.log(forgetLink);
    // const err = await(await page.locator('//b[text()="Invalid Login details or Your Password might have expired. "]').textContent()).trim();
    // expect(err).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password');
    // console.log(err);
    //print("Code Executed");
    const welcome_menu = await(page.locator('//input[@name="username_show"]').getAttribute('value'));
    console.log(welcome_menu);

    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption('Hotel Creek');
    await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
    await page.locator('//select[@id="room_nos"]').selectOption('1');
    await page.locator('//input[@id="Submit"]').click();

    const get_title = await (page.locator('//td[text()="Select Hotel "]').textContent());
    console.log(get_title);

    const check_the_radio_button_is_selected = await (page.locator('//input[@id="radiobutton_0"]').isChecked());
    console.log("Radio Button Is Selected "+check_the_radio_button_is_selected);
    //page.waitForTimeout(3000);

    await page.check('//input[@id="radiobutton_0"]');

    const check_the_radio_button_is_select = await (page.locator('//input[@id="radiobutton_0"]').isChecked());
    console.log("After Checked the Radio Button")
    console.log("Radio Button Is Selected "+check_the_radio_button_is_select);

    await page.locator('//input[@id="continue"]').click()
    await page.locator('//input[@id="first_name"]').fill("John")
    await page.locator('//input[@id="last_name"]').fill("Cena")
    await page.locator('//textarea[@id="address"]').fill("123 Polard Steer, Newyork, america,600019")
    await page.locator('//input[@id="cc_num"]').fill("1234567891234567")
    await page.locator('//select[@id="cc_type"]').selectOption('VISA')
    await page.locator('//select[@id="cc_exp_month"]').selectOption('February')
    await page.locator('//select[@id="cc_exp_year"]').selectOption('2024')
    await page.locator('//input[@id="cc_cvv"]').fill("123")
    await page.locator('//input[@id="book_now"]').click()
    //await page.locator('//input[@id="search_hotel"]').click()
    await page.locator('//input[@id="my_itinerary"]').click()
    //await page.locator('//input[@id="logout"]').click()

    //const book_hotel_page = await(page.locator('//td[text()="Book A Hotel ""]').get)
    page.close();
    

    
    console.log("Code Executed Successfull");


}
);

