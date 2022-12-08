class GooglePage {

    getSearchField() {
        return cy.get('.gLFyf')
    }

    getResultlist() {
        return cy.get('.v7W49e > div')
    }
}

export default GooglePage