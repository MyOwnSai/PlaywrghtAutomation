class selector_Class{
    constructor(page){
        this.page = page;
        this.hotelLocation=page.locator('//select[@id="location"]');
        this.page.locator('//select[@id="location"]').selectOption('Sydney');
    }
    async hotel_Location(locatOption){
        await this.hotelLocation.selectOption({index:(locatOption)})
    }
}
module.exports={selector_Class}