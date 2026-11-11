
export class CommonMethods {
    page: any;
    constructor(page: any) {
        this.page = page;
    }
    async waitForElement(locator: string) {
        await this.page.waitForSelector(locator, { state: 'visible' });
    }

    async setInput(locator: string, value: string) {
       try{
        await this.waitForElement(locator)
        await this.page.fill(locator, value);
        } catch (error) {
        console.error("error while filling input: ", error);
        }
    }

    async clickElement(locator: string) {
         try{
        await this.page.click(locator);
        } catch (error) {
            console.error("error while clicking element: ", error);
        }
    }
    async getElementText(locator: string): Promise<string> {
        return await this.page.textContent(locator) || ''; 
    }
    async isElementVisible(locator: string): Promise<boolean> {
        return this.page.isVisible(locator); //avoid await here as this directly returning the Promise.
    }
}