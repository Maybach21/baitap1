class DatePicker{
    getDatePickerDisabled() {
        return cy.xpath('//input[@id="datepicker1"]');
    }

    getDatePickerEnabled() {
        return cy.xpath('//input[@id="datepicker2"]');
    }
}

export default DatePicker