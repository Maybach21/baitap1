import DatePicker from "../support/pageObjects/DatePicker";

const datePicker = new DatePicker()

describe('Input Birthday in date picker', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Input Birthday in date picker',() => {
        // datePicker.getDatePickerDisabled().contains('1992').click();
        datePicker.getDatePickerEnabled().type('09/21/1992');
    })
})