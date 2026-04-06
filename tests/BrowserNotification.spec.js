import{test,expect} from '@playwright/test'
import { permission } from 'process'

test('handling notification',async({browser})=>{
    const context = await browser.newContext({
        permissions:['notifications'], //browser will not ask any permission means accepted 
        permissions:[] //browser will not ask and deny that 
        
    })
    const page = context.newPage();
    await page.goto('');

})
