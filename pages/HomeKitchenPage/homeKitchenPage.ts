import { Page} from "playwright/test";
import { Base } from "../../base";
import * as selectors from './homeKitchenPageSelectors';

export class HomeKitchenPage{
    private readonly page:Page;
    private readonly base: Base;
    constructor(page:Page){
        this.page = page;
        this.base = new Base(page);
    }
    async clickHomeAndKitchen():Promise<void>{
        await this.base.toClick(selectors.homeKitchenButton);
    }
    async clickGlassware():Promise<void>{
        await this.base.toClick(selectors.glasswareLink);
    }
    async getUrl():Promise<string>{
       return await this.base.toGetUrl();
    }
    async getTextPrice():Promise<string>{
        await this.base.toWaitForTimeout();
        return await this.base.getText(selectors.priceOutside);
    }
    async getTextProductName():Promise<string>{
        await this.base.toWaitForTimeout();
        return await this.base.getText(selectors.product);
    }
    async clickProduct():Promise<void>{
        await this.base.toWaitForSelector(selectors.product);
        await this.base.toClick(selectors.product);
    }
    async newTab():Promise<Page[]>{
        await new Promise(resolve=>setTimeout(resolve,5000));
        const pages = this.page.context().pages();
        return pages;
   }   
   async getTextInsidePrice():Promise<string>{
    await this.base.toWaitForTimeout();
    return await this.base.getText(selectors.priceInside);
   }
   async clickAddToCart():Promise<void>{
    await this.base.toClick(selectors.addToCartButton);
   }
   async getSubTotal():Promise<string>{
    return await this.base.getText(selectors.cartSubTotal);
   }
    async clickGoToCart():Promise<void>{
        await this.base.toClick(selectors.goToCartButton);
}
    async getCartGlassProduct():Promise<string>{
        return await this.base.getText(selectors.glassProductCart);
 }
    async getCartMobileProduct():Promise<string>{
     return await this.base.getText(selectors.mobileProductCart);
 }
     async getCartUrl():Promise<string>{
        return await this.base.toGetUrl();
 }
    async getCartGlassPrice(): Promise<string> {
        return await this.base.getText(selectors.glassPriceCart);
}
  async getCartMobilePrice():Promise<string>{
     return await this.base.getText(selectors.mobilePriceCart);
  }
}



