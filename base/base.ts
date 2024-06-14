import{Browser, BrowserContext, Page, chromium} from '@playwright/test';
export class Base{
    private readonly page:Page;
    private browser: Browser;
    private currentPage : Page;
    private context: BrowserContext;
    constructor(page:Page){
        this.page=page;
    }
    async toClick(text:string):Promise<void>{
        await this.page.click(text);
    }
    async getText(selector:string):Promise<string>{
      return await this.page.innerText(selector);
    }
    async toWaitForElement(text:string):Promise<void>{
        await this.page.waitForSelector(text)
    }
    async launchurl(text:string):Promise<void>{
        await this.page.goto(text);
        console.log("Browser Launched");
    }
    
    async toPressEsc():Promise<void>{
        await this.page.keyboard.press('Escape');
    }
    async elementIsVisible(text:string):Promise<boolean>{
        const visible = await this.page.isVisible(text);
        console.log("IsVisible or Not:",visible);
        return visible;
    }
    async elementIsChecked(text:string):Promise<boolean>{
        const enable = await this.page.isChecked(text);
        console.log("IsEnabled or Not:", enable);
        return enable;
    }
    async toWaitForTimeout():Promise<void>{
        await this.page.waitForTimeout(5000);
    }
    async toWaitForSelector(time:string):Promise<void>{
        await this.page.waitForSelector(time);
    }
    async toGetUrl():Promise<string>{
        const myUrl = await this.page.url();
        return myUrl;
    }
    async toNavigateBack():Promise<void>{
        await this.page.goBack();
    }
    async toNavigate(url:string):Promise<void>{
        await this.page.goto(url);
    }
    async toGetSnap():Promise<void>{
        await this.page.screenshot({path:'screenshot.png', fullPage:true});
    }
    async toWaitForEvent():Promise<void>{
        this.page.waitForEvent("worker");
    }
    async toClose():Promise<void>{
        await this.page.close();
    }


}