import { Page } from "@playwright/test";
import { CommonMethods } from "./commonMethods";

export class LoginPage extends CommonMethods {

    userid = 'input[name ="user_name"]';
    password = 'input[name ="user_password"]';
    loginButton = 'input[name="Login"]';
    logo = "//img[@src='include/images/vtiger-crm.gif']";
    Loc_msg_error = '//td[contains(text(),"You must specify a valid username and password.")]';
    page: Page;
    constructor(page : Page) {
        super(page);
        this.page  = page;
    }

    async login (username: string, password: string) {
    await this.setUserName(username);
    await this.setPassword(password);
    await this.clickLogin();
    }

    async setUserName (username: string){
        //await this.page.fill(this.userid, username);
        await this.setInput(this.userid, username)
    } 
    async setPassword (password: string){
         // await this.page.fill(this.password, password);
         await this.setInput(this.password, password)
    }       
    async clickLogin (){
          //await this.page.locator(this.loginButton).click();
         await this.clickElement(this.loginButton);
    } 

}