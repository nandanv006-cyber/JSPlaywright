import { expect, test } from '@playwright/test'

test.only('MakeMyTrip',async({page})=>{

    await page.goto('https://www.makemytrip.global.com/?cc=in&redirectedBy=gl')
    await page.locator("//img[@alt='minimize']").click()
    await page.locator("//span[@data-cy='closeModal']").click()
    await page.locator("//label[@for='departure']").click();
    // today day future 3rd day price 
    let price = await page.locator("(//div[@aria-selected='true']/following::div)[6]//p[@class=' todayPrice']").innerText();
    await page.locator("(//div[@aria-selected='true']/following::div)[6]//p[@class=' todayPrice']").click();
    await page.getByText('Search').click();
    //span[@class=' fontSize18 blackFont']
    let actPrice = await page.locator("//span[@class=' fontSize18 blackFont']").first().innerText();
    await expect(price).toBe(actPrice)
    
})

test('amazon airfryer',async({page})=>{
    page.goto('');

})

