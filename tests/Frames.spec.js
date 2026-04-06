import{test,expect} from '@playwright/test'
import { log } from 'node:console';
//frame- one html document another html document is frames

test('frame and nested frame',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0');
    // await page.locator("//input[@id ='username']").fill('qwertyuiop');// error Because inside a frame
    await page.frameLocator('//iframe').locator("//input[@id ='username']").fill('qwertyuiop');
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1');
    await page.frameLocator('//iframe').frameLocator('//iframe').locator('#email').fill('Admin@gmail.com');
})

test('multiple frames',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2');
    // await page.frameLocator("//iframe[@class='w-full h-96']").nth(0).contentFrame().locator('#email').fill('qwertyui');
    await page.locator("//iframe[@class='w-full h-96']").nth(0).contentFrame().locator('#email').fill("qwertyuiop");
    await expect(page.getByPlaceholder('Search...')).toBeVisible();//checking no need to comeback 
})

test('nested Multiple frame', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3',{waitUntil:'networkidle'})

  // ✅ page.frames() is the correct way to loop frames
  for (const frame of page.frames()) {
    const el = frame.locator('#email')

    if (await el.count() > 0) {
      await el.fill('Admin@gmail.com')
      await page.screenshot({ path: './screenshot/nested.png' })
      break
    }
  }
})