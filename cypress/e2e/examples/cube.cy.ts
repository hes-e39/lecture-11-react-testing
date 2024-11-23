/// <reference types="cypress" />

describe('A Cube', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('a').contains('Example 5').click();
    });

    it('should rotate', () => {
        cy.get('#cube-wrapper').trigger('mousedown', {
            position: 'center',
        });
        cy.get('#cube-wrapper').trigger('mousemove', {
            x: 300,
            y: 0,
        });
        cy.get('#cube-wrapper').trigger('mouseup');

        cy.wait(4000);

        cy.matchScreenshot('cube should rotate');
    });
});
