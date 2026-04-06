import{test, expect} from '@playwright/test'

test('file upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let file = await page.locator('#singleFileInput');
    await file.scrollIntoViewIfNeeded();
    await file.setInputFiles("C:/Users/Nandan V/Downloads/Nandan V SDET.pdf");
    await page.locator("//button[text()='Upload Single File']").click()
    await expect(page.locator('#singleFileStatus')).toContainText("Nandan V SDET.pdf")

    await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/Nandan V/Downloads/Nandan V SDET.pdf","C:/Users/Nandan V/Downloads/Nandan V SDET.pdf","C:/Users/Nandan V/Downloads/Nandan V SDET.pdf"]);
    await page.screenshot({path:`./screenshot/fileUpload${Date.now()}.png`});
})

test('file download',async({page})=>{
    page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    const downloadpromise = page.waitForEvent('download');
    await page.fill('#writeArea','heyy sharvari');
    await page.locator('#downloadButton').click();
    const download = await downloadpromise;
    await download.saveAs(`./downloads/my${Date.now()}`);
    
})

test('auth popup',async({browser})=>{
    
    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    })
    const page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0');
    await page.locator('#AuthLink').click();
    await page.screenshot({path:`./screenshot/basic${Date.now()}.png`})
    
})