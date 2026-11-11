import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';

test('TC01-validate login page element', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto ('http://localhost:100/');
    expect(await page.title()).toBe('vtiger CRM - Commercial Open Source CRM');
    await expect(page.locator(loginPage.logo)).toBeVisible();

});

test('TC02-login test', async ({page}) => {

    await page.goto ('http://localhost:100/');
    const loginPage = new LoginPage(page);

   await loginPage.login("admin", "admin");
   const homePage = new HomePage(page);

    await expect(page).toHaveURL('http://localhost:100/index.php?action=index&module=Home')
    await expect(page.locator(homePage.Loc_link_logout)).toBeVisible();
});

test('TC03-Invalid login test', async ({page}) => {

    await page.goto ('http://localhost:100/');
    const loginPage = new LoginPage(page);
    await loginPage.login("admin", "admin1");
    await expect( page.locator(loginPage.Loc_msg_error)).toBeVisible();
});