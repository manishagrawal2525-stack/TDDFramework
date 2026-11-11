import { Page } from "@playwright/test";

export class HomePage {

    Loc_link_logout = '//a[text()= "Logout"]';
    
    page: Page;

    constructor(page : Page) {
        this.page  = page;
    }


}