import { And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../PageObject/Home.spec";
import 'cypress-real-events';

const home = new Home()
describe('', () => {

  And('User Hovers on the colorbar area', () => {
  })
  Then('User Verifies class card image clickable or not', () => {
    home.getClassCardImage().should('not.be.enabled')
  })
  And('User clicks class card header1', () => {
    home.getClassCardTitle().eq(2).click()
  })

})

