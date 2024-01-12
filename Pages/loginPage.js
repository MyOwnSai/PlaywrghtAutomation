
class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.userName=page.locator('id=username');
        this.password=page.locator('id=password');
        this.loginBtn=page.locator('#login');
    }
 
   
 
    // async login(uName,pass){
    //     await this.userName.type(uName);
    //     await this.password.type(pass);
    //     await this.loginBtn.click();
 
    // }
    async userNM(uname){
        await this.userName.type(uname);
    }
 
}
module.exports={LoginPage}
 

 
 

