class launchURL1{
    constructor(page){
        this.page=page;
        

    }
    async goToURL()
    {
        await this.page.goto("https://adactinhotelapp.com/index.php");
    }
}
module.exports={launchURL1}