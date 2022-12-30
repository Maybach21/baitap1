class RegisterAccount{
    getRegisterbtn() {
        return cy.xpath('//button[text()="Register"]');
    }

    getGenderradiobtn() {
        return cy.xpath('//input[@id="gender-female"]');
    }

    getInputFirstName() {
        return cy.xpath('//input[@id="FirstName"]');
    }

    getInputLastName() {
        return cy.xpath('//input[@id="LastName"]');
    }

    getInputDay() {
        return cy.xpath('//select[@name="DateOfBirthDay"]');
    }

    getInputMonth() {
        return cy.xpath('//select[@name="DateOfBirthMonth"]');
    }

    getInputYear() {
        return cy.xpath('//select[@name="DateOfBirthYear"]');
    }

    getInputEmail() {
        return cy.xpath('//input[@id="Email"]');
    }

    getInputCompany() {
        return cy.xpath('//input[@id="Company"]');
    }

    getInputPassword() {
        return cy.xpath('//input[@id="Password"]');
    }

    getInputConfirmPassword() {
        return cy.xpath('//input[@id="ConfirmPassword"]');
    }

    getRegisterbutton() {
        return cy.xpath('//button[@id="register-button"]');
    }
}

export default RegisterAccount