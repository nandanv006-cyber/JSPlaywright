import{test,expect} from '@playwright/test'
import { loginPage } from '../PageObject/Register'
import testdata from '../testdata/register.json'

test.describe('register user tests',()=>{
    test('register with valid username and password',async({page})=>{
        const login = new loginPage(page);
        await login.navigate('https://demoapps.qspiders.com/ui?scenario=1');
        // await login.registerUser('John Doe', 'john@test.com', 'pass@123');//hard code 
        await login.registerUser(testdata.username,testdata.email,testdata.password);//softcode
        await expect(page.locator("//h1[text()='Login']")).toHaveText("Login");
    })
    
})

