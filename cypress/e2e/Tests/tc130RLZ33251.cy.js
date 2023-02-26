const { Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/Home.spec'
const home = new Home();

describe('', () => {
  Then('User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle icon or not', () => {
    home.getHelpIconStd().eq(0).should('be.visible')
  })
  Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour1', () => {
    home.getHelpIconColorStd().should('have.css', 'color', 'rgb(0, 0, 0)')
  })
  And('User Clicks Help icon1', () => {
    home.getHelpIconStd().eq(0).realHover()
  })
  Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour for student user', () => {
    home.getHelpIconColorStd().should('have.css', 'color', 'rgb(0, 0, 0)')
  })
  And('User Clicks Help icon for student user', () => {
    home.getHelpIconStd().eq(0).click()
  })
  Then('User Verifies Drop Down background colour for student user', () => {
    home.getPopUpStd().should('have.css', 'color', 'rgb(33, 37, 41)')
  })
  Then('User Verifies Search Text Box apperars on the Top of the Drop Down Values for student user', () => {
    home.getInputBoxStd().should('be.visible')
  })
  And('User Enters some value in Textbox for student user', () => {
    home.getInputBoxStd().click().type('classes', { force: true })
  })
  And('User hits enter for student user', () => {
    home.getInputBoxStd().click().type('{enter}')
  })
  Then('User verifies the Result of Textbox for student user', () => {
    home.getFloating().should('be.visible')
  })


})