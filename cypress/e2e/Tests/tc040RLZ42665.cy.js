const { And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
import Home from '../PageObject/Home.spec'
const home = new Home();
const bs = new BaseClass();
const profilePage = new ProfilePage()
let len;
describe('', () => {


  And('User Hover on Classes subnav', () => {
    home.getClassesSubNav().realHover()
  })
  Then('User verifies class list popup modesl is displayed or not', () => {
    home.getClassesPopUp().should('be.visible')
  })
  And('User Click on any classes displayed in class list popup modal', () => {
    home.getClassesCard().then((data) => {
      len = data.length;
      var randomNumber = Math.floor(Math.random() * len) + 1;
      home.getClassesCard().eq(randomNumber - 1).click()
    })
  })
  And('User moving mousedown', () => {
    home.getClassesSubNav().trigger('mouseout')
  })
  Then('User verifies new class details page is not displayed', () => {
    cy.url().should('not.contain.text', 'assignments')

  })







})