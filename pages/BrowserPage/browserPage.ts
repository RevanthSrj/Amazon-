import { Page } from "playwright/test";

export class BrowserPage{
    private readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async browser():Promise <void>{
        let browser;
        const context = await browser.newContext();
        const pages = await context.pages();
        await pages[1].bringToFront();
    }

    
}

// import { Page, chromium} from "@playwright/test";
// import { Base } from "../../base";

// export class BrowserPage{
//    private readonly page: Page;
//    private readonly base:Base;
//     constructor(page:Page){
//         this.page=page;
//         this.base=new Base(page);
//     }    
// //    async browserLaunch():Promise<void>{
// //          await this.base.launchBrowser();
// //      }
// //      async urlLaunch():Promise<void>{
// //          await this.base.launchurl("https://www.amazon.in/");
// //      }
//      async launchBrowser():Promise<void>{
//        const browser = await chromium.launch();
//        const context = aw
//        // this.browser = await chromium.launch();
//         //this.context = await this.browser.newContext();
//          //this.currentPage = await this.context.newPage();
//     }
// }
