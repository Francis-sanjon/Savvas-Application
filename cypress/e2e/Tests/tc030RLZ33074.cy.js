const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
import 'cypress-real-events'
const bs = new BaseClass();
const home = new Home()
const profilePage = new ProfilePage();


describe('', () => {

   Then('User Verifies the square class cards in new Realize homepage', () => {
      //cy.get('[class="h-100 pr-0 className col-10"]').should('have.attr', 'style', 'max-width: 564px;')
      home.getHomeSize().should('have.attr', 'style', 'max-width: 564px;')
   })
   And("User Hover 'Pen and Paper' icon", () => {
      // cy.get('[data-e2e-id="class-listing-assignments-link"]').eq(0).realHover()
      home.getPaperAndPen().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Assignments' is displayed or not", () => {
      //  cy.get('[data-e2e-id="class-listing-assignments-link"]').eq(0).realHover().should('have.attr', 'title', 'Assignments');
      home.getPaperAndPen().eq(0).realHover().should('have.attr', 'title', 'Assignments');
   })
   And("User Hover 'People' icon", () => {
      // cy.get('[data-e2e-id="class-listing-studentsAndGroups-link"]').eq(0).realHover()
      home.getPeople().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Student & Groups' is displayed or not", () => {
      // cy.get('[data-e2e-id="class-listing-studentsAndGroups-link"]').eq(0).realHover().should('have.attr', 'title', 'Students & Groups');
      home.getPeople().eq(0).realHover().should('have.attr', 'title', 'Students & Groups');
   })
   And("User Hover 'Graph' icon", () => {
      // cy.get('[data-e2e-id="class-listing-data-link"]').eq(0).realHover()
      home.getGraph().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Data' is displayed or not", () => {
      // cy.get('[data-e2e-id="class-listing-data-link"]').eq(0).realHover().should('have.attr', 'title', 'Data');
      home.getGraph().eq(0).realHover().should('have.attr', 'title', 'Data');
   })
   And("User Hover 'Book' icon", () => {
      // cy.get('[title="Programs"]').eq(0).realHover()
      home.getBookIcon().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Programs' is displayed or not", () => {
      // cy.get('[title="Programs"]').eq(0).realHover().should('have.attr', 'title', 'Programs');
      home.getBookIcon().eq(0).realHover().should('have.attr', 'title', 'Programs');
   })


})