const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
const bs = new BaseClass();

describe('', () => {
   
    Then('User Verify if scroll bar is not displayed in My Programs section', () => {
        cy.viewport(1000, 1000)
        cy.get('.d-none > programs-list > .programs-list').should('be.visible').get('.d-none').should('have.css', 'overflow-y', 'scroll')
            
                cy.get('[class="program-row_list_image"]').should('have.length.above',4)
    })

})






















