describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  afterEach(() => {
    cy.screenshot();
  });

  it('loads the homepage and finds the title', () => {
    cy.root().should('include.text', 'Employee Managment System'); // Update based on your app
  });

  it('loads the Employee Page & title List', () => {
    cy.root().should('include.text', 'Employee List');
  });

  it('Clicks a Add Employee Button and Redirects', () => {
    cy.get('[data-testid="add-button"]').click();
    cy.url().should('include', 'employee/add'); // Or whatever the result is
  });
});