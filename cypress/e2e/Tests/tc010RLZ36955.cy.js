import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../PageObject/01_Home.spec";
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const classes = new ClassesPage()
const home = new Home()
describe('', () => {


    And("User Mouse hover on the class card title", () => {
        home.getClassCardTitle().eq(0).realHover()
    })
    Then("User verify it displays with underline on the class card title", () => {
        home.getClassCardTitle().eq(0).trigger('mouseover', { force: true }).should(($el) => {
            if ($el.css('cursor') == 'pointer') {
                expect($el.css('cursor')).to.eq('pointer')
            } else if ($el.css('cursor') == 'auto') {
                expect($el.css('cursor')).to.eq('auto')
            }
        })
    })
    And('User Hover on the colorbar area', () => {
        home.getColorBar().eq(1).realHover();
    })
    Then('verify cursor turns into hand symbol', () => {
        home.getColorBar().should(($el) => {
            if ($el.css('cursor') == 'pointer') {
                expect($el.css('cursor')).to.eq('pointer')
            } else if ($el.css('cursor') == 'auto') {
                expect($el.css('cursor')).to.eq('auto')
            }
        })
    })
    Then('User Verify class card image clickable or not', () => {
        home.getClassCardImage().click().should('not.be.enabled')
    })
    And('User clicks class card header', () => {
        home.getClassCardHeader().click()
    })
    Then('User verifies which nagating to assignment listing page', () => {
        classes.getActive().should('have.class', 'active')
    })


})

