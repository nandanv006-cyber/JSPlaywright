import{test,expect} from '@playwright/test'

test('swtich between tabs',async({browser})=>{
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.amazon.in/');
    const pagePromise = context.waitForEvent('page');
    await page.locator('//a[@data-csa-c-content-id="nav_cs_mobiles"]').click({button:'middle'});
    const page2 = await pagePromise;
    await page2.waitForEvent('load');
    await page2.screenshot({path:`./screenshot/tab.png`});
    await expect(page2).toHaveURL('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles')
})

