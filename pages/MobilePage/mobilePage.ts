import { ChromiumBrowser, Page, chromium } from "playwright/test";
import { Base } from "../../base";
import * as selectors from './mobilePageSelectors';

export class Mobile{
    private readonly page:Page;
    private readonly base : Base;
    constructor(page:Page){
        this.page=page;
        this.base = new Base(page);
    }
    async clickMobile():Promise<void>{
        await this.base.toClick(selectors.mobileButton);
    }
    async verifyPrimeCheckboxIsChecked():Promise<void>{
        await this.base.elementIsChecked(selectors.primeCheckbox);
    }
    async clickBrandOnePlusCheckbox():Promise<void>{
        await this.base.toWaitForSelector(selectors.onePlusCheckbox);
        await this.base.toClick(selectors.onePlusCheckbox);
    }
    async firstTabOnePlusUrl():Promise<string>{
       return await this.base.toGetUrl();
       
    }
    async getOutsideOneplusPrice():Promise<string>{
        await this.base.toWaitForSelector(selectors.priceOutside);
        return await this.base.getText(selectors.priceOutside);
          
    }
   async ClickOnePlusLink():Promise<void>{
    await this.base.toWaitForSelector(selectors.onePlusLink);
    await this.base.toClick(selectors.onePlusLink);
   }
   async newTab():Promise<Page[]>{
        await new Promise(resolve=>setTimeout(resolve,5000));
        const pages = this.page.context().pages();
        return pages;
   }
   async onePlusUrl():Promise<string>{
        return await this.base.toGetUrl();
  }
   async getInsidePrice():Promise<string>{
    await this.base.toWaitForTimeout();
    return await this.base.getText(selectors.priceInside);
   }
   async verifyInstockText():Promise<string>{
    await this.base.toWaitForTimeout();
    return await this.base.getText(selectors.textInStock);
   }
   async verifyAddToCartText():Promise<string>{
    return await this.base.getText(selectors.textAddToCart);
   }
    async verifyBuyNowText():Promise<string>{
        return await this.base.getText(selectors.textBuyNow);
   }
   async clickAddToCart():Promise<void>{
    await this.base.toClick(selectors.clickAddToCart);
   }
   async addedCartText():Promise<string>{
    return await this.base.getText(selectors.texttAddedToCart);
   }
   async clickCheckOut():Promise<void>{
    await this.base.toClick(selectors.checkOutButton);
   }
   async isVisibleSignIn():Promise<boolean>{
    await this.base.toWaitForTimeout();
    const visible = await this.base.elementIsVisible(selectors.signIn);
    return visible;
    }
    async toBack():Promise<void>{
        await this.base.toNavigateBack();
    }
    async clickCartButton():Promise<void>{
        await this.base.toClick(selectors.cart);
    }
    async newCartText():Promise<string>{
        await this.base.toWaitForTimeout();
        return await this.base.getText(selectors.cartVerify);
    }
    async toCloseNewPage():Promise<void>{
        await this.base.toClose();
    }
}















