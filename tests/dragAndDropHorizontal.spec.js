import{test} from '@playwright/test'

test('H drag and drop',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#slider-range').scrollIntoViewIfNeeded();

    await page.locator("//div[@id='slider-range']//span").first().click();
    // await page.mouse.down();
    for(let i=0;i<25;i++){
        await page.keyboard.press('ArrowRight')
    }
    // await page.mouse.up()


})