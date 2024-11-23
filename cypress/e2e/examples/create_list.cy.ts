/// <reference types="cypress" />

/**
 * cy: object given to use by Cypress
 */

/**
 * get: get one or more DOM element by selecetor alias (think $(...) in jQuery). Implicit assertion
 */

/**
 * contains: Get Dom element containing the text
 * contains(content)
 * contains(selector, content)
 */

/**
 * intercept: intercept a request and respond with the specified response
 */

describe('A List', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('a').contains('Example 4').click();
    });

    it('should have a title', () => {
        cy.contains('My List');
    });

    it('should have an add button', () => {
        cy.get('button').contains('Add');
    });

    it('should have a new item added to it', () => {
        cy.get('input').type('item 1');
        cy.get('button').contains('Add').click();

        cy.get('div').contains('item 1');
    });

    it('should add multiple items', () => {
        cy.get('#new-item').type('item 1');
        cy.get('button').contains('Add').click();
        cy.get('#new-item').type('item 2');
        cy.get('button').contains('Add').click();

        cy.get('div').contains('item 1');
        cy.get('div').contains('item 2');
    });

    it('should add multiple items and then save', () => {
        cy.intercept('POST', '/items*', {
            statusCode: 201,
            body: {
                items: ['item 1', 'item 2'],
            },
        });

        cy.get('#new-item').type('item 1');
        cy.get('button').contains('Add').click();
        cy.get('#new-item').type('item 2');
        cy.get('button').contains('Add').click();

        cy.get('button').contains('Save').click();

        cy.get('div').contains('Saved List!');
    });
});
