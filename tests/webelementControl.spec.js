import { test, expect } from '@playwright/test'


test('webelement Control', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://moscot-2.myshopify.com/')
    await page.locator('#password').fill('Shopify@69');
    await page.locator("//button[@type='submit']").click();
    await page.screenshot({ path: `./screenshot/ss${Date.now()}.png` });

})

test("innerText vs textContext", async ({ page }) => {
    await page.setContent(
        ` <div id="promo">
            Hello! 
            <span style="display: none;">GET 50% OFF</span>
        </div>`
    )
    let innerText = await page.locator('#promo').innerText();
    console.log(innerText);
    let textContent = await page.locator('#promo').textContent();
    console.log(textContent)
})

test("Screenshot", async ({ page }) => {
    // https://testautomationpractice.blogspot.com/
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill("Nandan");
    await page.locator('#name').screenshot({ path: `./screenshot/textfield${Date.now()}.png` });
    await page.screenshot({ path: `./screenshot/ss${Date.now()}.png` });
    await page.screenshot({ path: `./screenshot/ss${Date.now()}.png`, fullPage: true });
})
test('Element Interaction', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//button[@name='start']").click();
    await page.screenshot({ path: `./screenshot/ss${Date.now()}.png` });
    await page.locator("//button[@name='stop']").click();
    await page.screenshot({ path: `./screenshot/ss${Date.now()}.png` });
    let value = await page.locator("//button[@name='start']").getAttribute('name');
    console.log(value);
    // await page.locator("#monday").click();//This will also work
    await page.locator("#monday").check();// If we have type= checkbox this will work
    await page.screenshot({ path: `./screenshot/checkBox${Date.now()}.png` });
    await page.locator("#monday").uncheck();
    await page.screenshot({ path: `./screenshot/checkBox${Date.now()}.png` });
})

test('dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').scrollIntoViewIfNeeded();
    await page.locator('#country').selectOption('uk');
    await page.screenshot({ path: `./screenshot/Dropdown${Date.now()}.png` });
    // let a = await page.locator('#country').allTextContents();
    // console.log(a);
    let arr = await page.locator('#country').all();
    for (let f of arr) {
        console.log(await f.innerText());
    }
})

test("auto suggestion", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("shoes");

    let a = page.locator("//div[@class='left-pane-results-container']//div[@role='row']")
    await a.first().waitFor();

    console.log(await a.allTextContents());
})

test("mouse actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@class='dropbtn']").hover();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `./screenshot/hover${Date.now()}.png` });
    // await page.locator("//a[normalize-space()='Mobiles']").click();
    await page.screenshot({ path: `./screenshot/click${Date.now()}.png` });
    // await page.locator("//button[@ondblclick='myFunction1()']").dblclick();
    await page.locator("//button[@ondblclick='myFunction1()']").click({ clickCount: 2 });
    await page.screenshot({ path: `./screenshot/doubleclick${Date.now()}.png` });
})

test("Drag and drop", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    await page.screenshot({ path: `./screenshot/DD${Date.now()}.png` });
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    let targetBox = await page.locator('#dropZone1').boundingBox();

    await page.locator('#dragElement2').dragTo(page.locator('#dropZone1'), { targetPosition: { x: targetBox.x + targetBox.width / 2, y: targetBox.y + targetBox.height / 2 } });
    await page.screenshot({ path: `./screenshot/DDM${Date.now()}.png` });
})

test("key board action", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0');
    await page.locator("//input[@name='handleInput']").click();
    await page.keyboard.press('CapsLock');
    await page.keyboard.type('a')
    // await page.keyboard.up('Shift');
    await page.screenshot({ path: `./screenshot/key${Date.now()}.png` });


})

test("moscot", async ({ page }) => {
    await page.goto('https://moscot.com')
})

test("CSS value", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//button[@name='start']").click();
    // await page.waitForTimeout(5000);
    await page.mouse.move(200, 100)
    await page.locator("//button[@name='stop']").waitFor()
    const value = await page.getByRole('button', { name: 'STOP' }).evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    })
    await page.screenshot({ path: `./screenshot/css${Date.now()}.png` });
    console.log(value);
    await expect(page.locator("//button[@name='stop']")).toHaveCSS('background-color', 'rgb(255, 0, 0)');



})

test("css value", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
    let yes = page.locator('#btn')
    await yes.click();
    await page.waitForTimeout(5000);
    // background-color
    const value = await yes.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    })
    console.log(value);
    await expect(yes).toHaveCSS('background-color','rgb(134, 239, 172)')

})


test('alerts', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async (d) => {
        // await page.screenshot({ path: `./screenshot/popup${Date.now()}.png` });
        d.dismiss()
    })
    await page.locator('#alertBtn').click();
    await page.locator('#confirmBtn').click();
    page.on('dialog',  (d) => {
        // await page.screenshot({ path: `./screenshot/popup${Date.now()}.png` });
        console.log()
    })
    page.on('dialog',async(d)=>{
       console.log( d.message());
       await d.accept("Harry potter");
       await d.dismiss();//cant use both just for reference i did this 
    })
    await page.locator('#promptBtn').click();




})

test("ShadowRoot",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/shadow?sublist=0")
    await page.getByPlaceholder('Enter your username').fill("username");
    await page.pause();
})

