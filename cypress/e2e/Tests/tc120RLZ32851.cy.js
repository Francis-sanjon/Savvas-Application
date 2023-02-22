
const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/01_Home.spec'
import BaseClass from "../PageObject/BaseClass.spec";
import LoginPage from '../PageObject/LoginPage.spec';
import ProfilePage from '../PageObject/ProfilePage.spec'

const home = new Home();
const bs = new BaseClass();
const loginPage = new LoginPage()
const profilePage = new ProfilePage()
describe('', () => {
  Given("User launche the Realize login Page", () => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
  When("User logins Savvas Appllication with valid {string} and valid {string}", async (username, password) => {
    bs.savvasLogin(username, password)
  })
  Then('User verifies the Realize Dashboard Page', () => {
    cy.url().should('include', 'dashboard');
  })
  Then('User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon or not', () => {
    home.getHelpIconColor().should('be.visible')
  })
  Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour', () => {
    home.getHelpIconColor().should('have.css', 'color', 'rgb(0, 0, 0)')
  })
  And('User Mouseover the help Icon', () => {
    home.getHelpIcon().realHover()
  })
  And('User verifies Prime Shade on Help Icon when mouseover', () => {
    home.getHelpIconColor().should('have.css', 'border-radius', '50%')
  })

  And('User Clicks Help Icon', () => {
    home.getHelpIconColor().click()
  })
  Then('User Verifies Drop Down background colour', () => {
    home.getPopUp().should('have.css', 'color', 'rgb(33, 37, 41)')
  })

  Then('User Verifies Search Text Box apperars on the Top of the Drop Down Values', () => {
    home.getInputBox().should('be.visible')
  })
  And('User Enters some value in Textbox', () => {
    home.getInputBox().click().type('classes', { force: true })
  })

  And('User hits enter', () => {
    home.getInputBox().click().type('{enter}')
  })
  Then('User verifies the Result of Textbox', () => {
    home.getPopUp().should('be.visible')
  })
  And('User close the popup', () => {
    home.getPopUpCloseBtn().click()
  })

  And('User clicks Help for this Page', () => {
    home.getHelpForThisPage().click()
  })
  Then('User verifies the result for help for this page option', () => {
    cy.get('[class="floatingModal hydrated"]').should('be.visible')
  })

  And('User clicks Program Training option', () => {
    bs.windowHandle(home.getProgramTraining())
  })

  Then('User verifies the url for Program Training', () => {
    cy.url().should('include', 'https://mysavvastraining.com/')
  })
  And('User navigating to home page', () => {
    cy.go('back')
  })

  And('User clicks Technical Support option', () => {
    bs.windowHandle(home.getTechnicalSupport())
  })
  Then('User verifies the url for Technical Support', () => {
    cy.url().should('include', 'support/s/contactsupport')
  })

  And('User clicks Contact a Program Specialist option', () => {
    bs.windowHandle(home.getProgramSpecialist())
  })
  Then('User verifies the url for Contact a Program Specialist', () => {
    cy.url().should('include', 'https://mysavvastraining.com/')
  })

})