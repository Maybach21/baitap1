describe('Submit Practice Form successful', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Input valid First Name and Last Name',() => {
        cy.get('#firstName')
        // cy.xpath('//input[@id="firstName"]').should('be.empty').type('MayB');
    })
})