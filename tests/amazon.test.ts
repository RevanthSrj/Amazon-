import {test}from './testFixture';
test('Launch', async ({ amazon }) => {
        await amazon.launchBrowserAndUrl();
        await amazon.verifyCartTextAndDeliveryPopup();
        await amazon.mobileFunctions();
        await amazon.homeAndKitchen();
    });
    // myTestWithFixture('Verify', async({amazon}) =>{
    //        await amazon.verifyCartTextAndDeliveryPopup();
//});
    // myTestWithFixture('Mobile', async({amazon})=>{
    //   await amazon.mobileFunctions();
//});
    // myTestWithFixture('Home and Kitchen', async({amazon})=>{
 //       await amazon.homeAndKitchen();
    // });

// test("Amazon POC",async ({page}) => {
//     const amazonStep = new Amazon(page);
//     await test.step('Given user launch the browser and url',async()=>{
//         await amazonStep.launchBrowserAndUrl();
//     });
//     await test.step('When user verify the cart and delivery popup',async()=>{
//         await amazonStep.verifyCartTextAndDeliveryPopup();
//     });
//     await test.step('And user checkout Mobiles and verify texts',async()=>{
//         await amazonStep.mobileFunctions();
//     });
//     await test.step('And user verify the home and kitchen',async()=>{
//         await amazonStep.homeAndKitchen();
//     });
// });
