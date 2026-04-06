//Browser Control 

const {test,expect}  = require('@playwright/test');

test("browser control",async({browser})=>{
    const context = await browser.newContext();
    const admin = await context.newPage();
    await admin.goto("https://moscot-2.myshopify.com/");
    await admin.setViewportSize({width:360 ,height:800})
    const time = Date.now();
    await admin.screenshot({path:`./screenshot/ss1${time}.png`,fullPage:true});
    const title = await admin.title();
    
    await console.log(title);
    await expect(admin).toHaveTitle(title);
    let time1 = new Date().getTime();
    console.log(time1);

})
test.only('locators',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill("student");
    await page.locator('#password').fill("Password123");
    await page.locator('#submit').click();
    await page.screenshot({path:`./screenshot/ss${Date.now()}.png`});

    const page2 = await context.newPage();
    await page2.goto('https://practicetestautomation.com/practice-test-login/');
    await page2.locator("//input[@name='username']").fill("student");
    await page2.locator("//input[@name='password']").fill("Password123");
    await page2.locator('#submit').click();
})


