import { test } from '@playwright/test'
test('excel',async({page})=>{
    await page.goto('http://localhost:8888/')
    await page.fill("//input[@name='user_name']","admin")
    await page.fill("//input[@name='user_password']","admin")
    await page.locator('#submitButton').click();
    console.log('heyy')
})