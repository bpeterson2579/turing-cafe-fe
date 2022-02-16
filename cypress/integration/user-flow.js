describe('Usability for Turing Cafe Reservations page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should show Turing Cafe Reservations', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations')
  })

  it('Should show a form', () => {
    cy.get('#name')
      .should('be.visible')

    cy.get('#date')
      .should('be.visible')

    cy.get('#time')
      .should('be.visible')
    
    cy.get('#number')
      .should('be.visible')

    cy.get('.submit-res')
      .should('be.visible')
  })

  it('Should be able to type and submit a reservation', () => {
    cy.get('#name')
      .type('Brian')

    cy.get('#date')
      .type('2/17')

    cy.get('#time')
      .type('6:30')

    cy.get('#number')
      .type('4')

    cy.get('.submit-res')
      .click()

    cy.get('.reservation-card').last()
      .get('h3')
      .contains('Brian')
  })
})