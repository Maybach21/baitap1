class PracticeForm{
    getInputFirstName() {
        return cy.xpath('//input[@id="firstName"]');
    }

    getInputLastName() {
        return cy.xpath('//input[@id="lastName"]');
    }

    getInputEmail() {
        return cy.xpath('//input[@id="userEmail"]');
    }

    getGenderRadiobtn() {
        return cy.xpath('//input[@id="gender-radio-2"]');
    }

    getInputMobileNumber() {
        return cy.xpath('//input[@id="userNumber"]');
    }

    getInputDOB() {
        return cy.xpath('//input[@id="dateOfBirthInput"]');
    }

    getYear() {
        return cy.xpath('//select[@class="react-datepicker__year-select"]');
    }

    getMonth() {
        return cy.xpath('//select[@class="react-datepicker__month-select"]');
    }

    getDay(date) {
        // return cy.xpath('//div[@aria-label="Choose Monday, September 21st, 1992"]')
        return cy.get('.react-datepicker__day--0' + date);
    }

    getInputSubjects() {
        return cy.xpath('//div[@id="subjectsContainer"]');
    }

    getHobbiescheckbox() {
        return cy.xpath('//input[@id="hobbies-checkbox-1"]');
    }

    getUploadPicturebtn() {
        return cy.xpath('//input[@id="uploadPicture"]');
    }

    getInputCurrentAddress() {
        return cy.xpath('//textarea[@id="currentAddress"]');
    }

    getStatelist() {
        return cy.xpath('//div[@id="state"]');
    }

    getCitylist() {
        return cy.xpath('//div[@id="city"]');
    }

    getSubmitbtn() {
        return cy.xpath('//button[@id="submit"]');
    }
}

export default PracticeForm