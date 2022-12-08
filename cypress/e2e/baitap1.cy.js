import GooglePage from '../pages/GooglePage.js'

describe('Test case search keyword in Google and verify result', () => {

    const googlePage = new GooglePage()

    beforeEach (() => {
        cy.visit('/')
    })

    it('input keyword and click search', () => {
        //input keyword then enter
        googlePage.getSearchField().should('be.empty').type('pandora{enter}');
        //verify result
        googlePage.getResultlist().should('have.length.gte', 1).should('contain', 'pandora')
    })
})

