import PracticeForm from "../support/pageObjects/PracticeForm"

const praticeForm = new PracticeForm()

describe('Submit Practice Form successful', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://demoqa.com/automation-practice-form")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {1920
        return false
    })

    it('Fill in valid values in all fields',() => {
        praticeForm.getInputFirstName().should('be.empty').type('May');
        praticeForm.getInputLastName().should('be.empty').type('Bach');
        praticeForm.getInputEmail().should('be.empty').type('minhthu.bach21@gmail.com');
        praticeForm.getGenderRadiobtn().click({force:true});
        praticeForm.getInputMobileNumber().should('be.empty').type('0904754751');
        praticeForm.getInputDOB().click();
        praticeForm.getYear().select('1992');
        praticeForm.getMonth().select('8');
        praticeForm.getDay('21').click();
        praticeForm.getInputSubjects().type('Arts{enter}');
        praticeForm.getHobbiescheckbox().click({force:true});
        // praticeForm.getUploadPicturebtn().click();
        praticeForm.getInputCurrentAddress().should('be.empty').type('Tran Phu- Ha Dong');
        praticeForm.getStatelist().type('NCR{enter}');
        praticeForm.getCitylist().type('Delhi{enter}');
        praticeForm.getSubmitbtn().click();
    })
})