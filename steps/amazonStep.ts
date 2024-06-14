import { Page, chromium, expect } from '@playwright/test';
import{BrowserPage} from '../pages';
import { HomePage } from '../pages/HomePage/homePage';
import { Mobile } from '../pages/MobilePage/mobilePage';
import { HomeKitchenPage } from '../pages/HomeKitchenPage/homeKitchenPage';
export class Amazon{
    private readonly page:Page;
    private readonly browserPage : BrowserPage;
    private readonly homePage:HomePage;
    private readonly mobilePage:Mobile;
    private readonly newPage: Mobile;
    private readonly homeKitchenPage : HomeKitchenPage;
    private readonly newHomeKitchenPage : HomeKitchenPage;
    constructor(page:Page){
        this.page = page;
        this.browserPage = new BrowserPage(page);
        this.homePage = new HomePage(page);
        this.mobilePage= new Mobile(page);
        this.homeKitchenPage = new HomeKitchenPage(page);
    }
    
    async launchBrowserAndUrl():Promise<void>{
       await chromium.launch();
       await this.page.goto("https://www.amazon.in/");
    }
    async verifyCartTextAndDeliveryPopup():Promise<void>{
        await this.homePage.clickCartButton();
        expect(await this.homePage.validateCartText()).toBe("Your Amazon Cart is empty");
        await this.homePage.clickDeliveryButton();
        if(await this.homePage.validateLocationPopup()){
            await this.homePage.pressEscape();      
        }
    }
    async mobileFunctions():Promise<void>{
        await this.mobilePage.clickMobile();
        await this.mobilePage.verifyPrimeCheckboxIsChecked();
        await this.mobilePage.clickBrandOnePlusCheckbox();
        const url = await this.mobilePage.firstTabOnePlusUrl();
        expect(url).toContain("OnePlus");
        const mobilePriceOutside = await this.mobilePage.getOutsideOneplusPrice();
        await this.mobilePage.ClickOnePlusLink();
        const pages = await this.mobilePage.newTab();
        const newPage = new Mobile(pages[1]);
        const mobilePriceInside = await newPage.getInsidePrice();
        expect(mobilePriceInside).toEqual(mobilePriceOutside);
        const inStock = await newPage.verifyInstockText();
        expect(inStock).toContain("In stock");
        const addToCartText = await newPage.verifyAddToCartText();
        expect(addToCartText).toContain("Add to Cart");
        const buyNowText = await newPage.verifyBuyNowText();
        expect(buyNowText).toContain("Buy Now");
        await newPage.clickAddToCart();
        const addedCartText = await newPage.addedCartText();
        expect(addedCartText).toContain("Added to Cart");
        await newPage.clickCheckOut();
        if(await newPage.isVisibleSignIn()){
            await newPage.toBack();
        }
        await newPage.clickCartButton();
        const textOfCart = await newPage.newCartText();
        expect(textOfCart).not.toContain("Your Amazon Cart is empty");
        await newPage.toCloseNewPage();        
    }
    async homeAndKitchen():Promise<void>{
        await this.homeKitchenPage.clickHomeAndKitchen();
        expect(await this.homeKitchenPage.getUrl()).toContain("Home-Kitchen");
        await this.homeKitchenPage.clickGlassware();
        const glassPriceOutside = await this.homeKitchenPage.getTextPrice();
        const productName = await this.homeKitchenPage.getTextProductName();
        await this.homeKitchenPage.clickProduct();
        const pages = await this.homeKitchenPage.newTab();
        const homeKitchenPage = new HomeKitchenPage(pages[1]);
        const glassPriceInside = await homeKitchenPage.getTextInsidePrice();
        expect(glassPriceInside).toEqual(glassPriceOutside);
        await homeKitchenPage.clickAddToCart();
        const subtotalText = await homeKitchenPage.getSubTotal();
        const subtotal = parseInt(subtotalText.replace(/[^\d.]/g, ''),10);
        await homeKitchenPage.clickGoToCart();
        expect(await homeKitchenPage.getCartGlassProduct()).toContain("Yera Glass Mug with Handle-250ml ");
        expect(await homeKitchenPage.getCartMobileProduct()).toContain("OnePlus 11R 5G");
        expect(await homeKitchenPage.getCartUrl()).toContain("cart");
        const glassPriceCart = await homeKitchenPage.getCartGlassPrice();
        const glassPrice = parseInt(glassPriceCart.replace(/[^\d.]/g, ''),10);
        const mobilePriceCart = await homeKitchenPage.getCartMobilePrice();
        const mobilePrice = parseInt(mobilePriceCart.replace(/[^\d.]/g, ''),10);
        const totalCartPrice = mobilePrice + glassPrice;
        expect(subtotal).toBe(totalCartPrice);
        console.log("Test Passed");
    }
}

