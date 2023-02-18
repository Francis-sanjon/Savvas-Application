const {  And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const profilePage = new ProfilePage()
let len;
describe('', () => {


  And('User Hover on Classes subnav', () => {
    cy.get('.header__navbar').shadow().find('[data-id="classes"]').realHover()
  })
  Then('User verifies class list popup modesl is displayed or not', () => {
    cy.get('[class="clearfix onHoverClass"]').should('be.visible')
  })
  And('User Click on any classes displayed in class list popup modal', () => {
    cy.get('[class="class-card"]').then((data) => {
      len = data.length;
      var randomNumber = Math.floor(Math.random() * len) + 1;
          cy.get('[class="class-card"]').eq(randomNumber - 1).click()
    })

  })
  And('User moving mousedown', () => {
    cy.get('.header__navbar').shadow().find('[data-id="classes"]').trigger('mouseout')
  })
  Then('User verifies new class details page is not displayed', () => {
    cy.url().should('not.contain.text', 'assignments')
    
  })







})