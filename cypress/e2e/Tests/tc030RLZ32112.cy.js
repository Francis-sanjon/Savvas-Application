const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
const bs=new BaseClass()

describe('', () => {
   
   
    Then('User verifies rectangular class card is displayed in full browser window', () => {
        cy.get(':nth-child(1) > .classHeader > .classAssignmentLink > .h-100').should('have.attr','style','max-width: 457px;')
    })
    And('User Change bowser resolution to 767 and verify mobile class card', () => {
        cy.viewport(767,1024)
    })
    Then('User verifies mobile class card is displayed or not when browser resolution is below 768', () => {
      
    })
    And('User Change bowser resolution to 800 and verify rectangular class card', () => {
        cy.viewport(800,1024)
    })
    When('Then User verifies Rectangular class card is displayed or not when browser resolution is 768 or above', () => {
        cy.get(':nth-child(1) > .classHeader > .classAssignmentLink > .h-100').should('have.attr','style','max-width: 326px;')
    })
   

})