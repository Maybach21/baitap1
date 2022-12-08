describe('Test case search keyword in Google and verify result', () => {
    beforeEach (() => {
        cy.visit('/')
    })

    it('input keyword and click search', () => {
        //input keyword then enter
        cy.get('.gLFyf').should('be.empty').type('pandora{enter}');
        //verify result
        cy.get('.v7W49e').should('have.length.gte', 1);
    })
})

