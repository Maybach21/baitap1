import RegisterAccount from "../support/pageObjects/RegisterAccount";

const registerAccount = new RegisterAccount()

describe('Submit Practice Form successful', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
    })

    it('Register new account',() => {
        registerAccount.getRegisterbtn().click();
        registerAccount.getGenderradiobtn().click();
        registerAccount.getInputFirstName().should('be.empty').type('May');
        registerAccount.getInputLastName().should('be.empty').type('Bach');
        registerAccount.getInputDay().select('21');
        registerAccount.getInputMonth().select('September');
        registerAccount.getInputYear().select('1992');
        registerAccount.getInputEmail().type('minhthu.bach21@gmail.com');
        registerAccount.getInputCompany().type('CMCGlobal');
        registerAccount.getInputPassword().type('Minhthu21@@');
        registerAccount.getInputConfirmPassword().type('Minhthu21@@');
        registerAccount.getRegisterbutton().click();
    })
})