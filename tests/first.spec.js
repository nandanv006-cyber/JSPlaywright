import {test} from "@playwright/test"

test('first',async({browser})=>{

    const context = await browser.newContext();
    const storefront  = await context.newPage();
    await storefront.goto("https://admin.shopify.com/store/moscot-2");

    await storefront.pause();
    const admin = await context.newPage();
    await admin.goto("https://admin.shopify.com/store/moscot-2");
    
});

test("second test",async({page})=>{

    await page.goto("https://admin.shopify.com/store/moscot-2");

})


