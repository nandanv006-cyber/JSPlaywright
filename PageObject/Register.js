
export class loginPage{
/**
   * @param {import('playwright').Page} page
   */


    constructor(page){
        this.page=page;
        this.nameTextField=page.locator('#name');
        this.emailTextField=page.locator('#email');
        this.passwordTextField=page.locator('#password');
        this.registerButton=page.locator("//button[@type='submit']");
    }
//  business Logic 
    async navigate(url){
        await this.page.goto(url);
    }

    async registerUser(name,email,password){
        await this.nameTextField.fill(name);
        await this.emailTextField.fill(email);
        await this.passwordTextField.fill(password);
        await this.registerButton.click();
    }


}