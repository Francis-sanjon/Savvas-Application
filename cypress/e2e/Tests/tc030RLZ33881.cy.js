const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec';
import Home from '../PageObject/01_Home.spec';
const home = new Home();
const bs = new BaseClass();
let colors = [];
let colors2 = [];
describe('', () => {

  Then('User Verifies the square class cards header colour in new Realize homepage', () => {
    cy.get('[class="class__title"]').should('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('[class="row classHeader"]').each(($el, index, $list) => {
      const color = $el.css('background-color');
      colors.push(color);
      cy.log(`Element ${index} has color: ${color}`);

    });

  })
  Then('User Verifies the square class cards header colour in new Realize homepage1', () => {
    cy.get('[class="class__title"]').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[class="row classHeader"]').each(($el, index, $list) => {
      const color = $el.css('background-color');
      colors2.push(color);
      cy.log(`Element ${index} has color: ${color}`);

    });
    cy.wrap(colors).should((colors) => {
      expect(colors).to.deep.equal(colors2);
    });
})
  And('User Clicks SignOut button', () => {
    home.getSignOutBtn().click()
    cy.wait(5000)
  })


})