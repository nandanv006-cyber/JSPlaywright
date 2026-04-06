import { test, expect } from '@playwright/test'

test('assertion', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect.soft(page).toHaveTitle("Automation Testing Practice");
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator("// *[name()='circle']")).toBeVisible(); //svg element
})

test('daily used assertion', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//button[@name='stop']")).toBeHidden();
    await expect(page.locator("//button[@name='start']")).toBeVisible();
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    let x = "Crazy";
    await page.locator('#name').fill(x);
    await expect(page.locator('#name')).toHaveValue("Crazy");
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');
    let arr = await page.locator('//select[@id="select-multiple-native"]//option');
    await arr.last().waitFor()
    let options = await arr.all();
    // await expect(page.locator('//select[@id="select-multiple-native"]')).toHaveValues()
    for (let d of options) {

        console.log(await d.innerText());

        await d.click({ modifiers: ['Control'] });

    }
    await page.locator('//button[normalize-space()="Add"]').click();
    await page.pause();

})

test('Vizual Regression', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await expect(page).toHaveScreenshot('home.png',{fullPage:true});
    // should try on logo 
    // npx playwright test assertion --update-snapshots

})

test('Non Retry',async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let title = await page.title();
    console.log(title);
    expect(title).toStrictEqual(title);
})