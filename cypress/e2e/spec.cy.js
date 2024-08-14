describe('Basic Login Functionality', () => {
  beforeEach(() => {
    cy.visit('https://jrodger312.dozuki.com');
  });

  it('validates on proper credentials', () => {
    cy.get('#login-id').type('cypress1@gmail.com');
    cy.get('#password').type('mypassword')
    cy.get('#loginBtn').click();
    cy.url().should('not.include', '/Login');
  });
  it('rejects invalid credentials', () => {
    cy.get('#login-id').type('fakeuser@gmail.com');
    cy.get('#password').type('fakepassword');
    cy.get('#loginBtn').click();
    cy.url().should('include', '/Login');
  })
});
