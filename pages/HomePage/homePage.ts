import { Page } from "playwright/test";
import { Base } from "../../base";
import * as selectors from './homePageSelectors';
import { Console } from "console";

export class HomePage{
    private readonly page:Page;
    private readonly base : Base;
    constructor(page:Page){
        this.page=page;
        this.base=new Base(page);
    }
    async clickCartButton():Promise<void>{
        await this.base.toClick(selectors.cartButton);
        console.log("User click on the cart button");
    }
    async validateCartText():Promise<string>{
       // await this.base.toWaitForElement(selectors.cartEmptyText);
       return await this.base.getText(selectors.cartEmptyText);
    
        
    }
    async clickDeliveryButton():Promise<void>{
        await this.base.toClick(selectors.deliveryButton);
        console.log("User click on the delivery button");
    }
    async validateLocationPopup():Promise<boolean>{
       const visible = await this.base.elementIsVisible(selectors.locationPopup);
       return visible;
    }
    async pressEscape():Promise<void>{
        await this.base.toPressEsc();
        await this.base.toWaitForTimeout();
    }
}