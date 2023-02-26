const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/Home.spec'
const home = new Home()

describe('', () => {

    Then('User verifies rectangular class card is displayed in full browser window', () => {
        cy.get('.classAssignmentLink > div.h-100').invoke('attr', 'style').then((style) => {
            const maxWidthRegex = /max-width:\s*(\d+)px/;
            const matches = style.match(maxWidthRegex);
            const maxWidth = matches ? parseInt(matches[1]) : null;
            cy.log(maxWidth)
            expect(maxWidth).to.greaterThan(1189)
        });
    })
    And('User Change bowser resolution to 767', () => {
        cy.viewport(767, 1024)
    })
    Then('User verifies mobile class card is displayed or not when browser resolution is below 768', () => {
        home.getClassResolution().should('have.attr', 'style', 'max-width: 599px;')
    })
    And('User Change bowser resolution to 800', () => {
        cy.viewport(800, 1024)
    })
    When('User verifies Rectangular class card is displayed or not when browser resolution is 768 or above', () => {
        home.getClassResolution().invoke('attr', 'style').then((style) => {
            const maxWidthRegex = /max-width:\s*(\d+)px/;
            const matches = style.match(maxWidthRegex);
            const maxWidth = matches ? parseInt(matches[1]) : null;
            cy.log(maxWidth)
            expect(maxWidth).to.greaterThan(325)
        });
    })


})