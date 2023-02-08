import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../PageObject/01_Home.spec";
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
const bs = new BaseClass();
const home = new Home()
describe('', () => {
   
   
    And("User Mouse hover on the class card title",()=>{
        home.getClassCardTitle().eq(0).realHover()
    })
    Then("User verify it displays with underline on the class card title",()=>{
        home.getClassCardTitle().eq(0).trigger('mouseover', { force: true }).should(($el) => {
            expect($el.css('cursor')).to.eq('auto')
        })
    })
    And('User Hover on the colorbar area',()=>{
        home.getColorBar().eq(1).trigger('mouseover')
    })
    Then('verify cursor turns into hand symbol',()=>{
        home.getColorBar().should(($el) => {
            expect($el.css('cursor')).to.eq('auto')
        })
    })
    Then('User Verify class card image clickable or not',()=>{
        home.getClassCardImage().click().should('not.be.enabled')
    })
    And('User clicks class card header',()=>{
        home.getClassCardHeader().click()
    })
    Then('User verifies which nagating to assignment listing page',()=>{
        cy.get('[class="active"]').should('have.class', 'active')
    })





})
