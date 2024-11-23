/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('TODO MVC', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com');
  });

  it('should have a react example', () => {
    cy.get('li.routing').contains('React').click();
    // special character sequence example
    cy.get('input.new-todo').type('Item {movetostart} First {enter}');

    cy.contains('First Item');
  });
});
