import { And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../PageObject/01_Home.spec";
import 'cypress-real-events';

const home = new Home()
describe('', () => {


    And('User Hovers on the colorbar area', () => {
      // home.getColorBar().eq(1).trigger('mouseover')
      home.getColorBar().eq(1).realHover()
    })
    Then('User Verifies class card image clickable or not', () => {
        home.getClassCardImage().should('not.be.enabled')
    })
    And('User clicks class card header1', () => {
        //home.getClassCardHeader().click()
   home.getClassCardTitle().eq(2).click()
    })

})

