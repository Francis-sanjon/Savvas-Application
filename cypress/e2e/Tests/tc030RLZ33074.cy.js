const { Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import Home from "../PageObject/Home.spec";
import 'cypress-real-events'

const home = new Home()

describe('', () => {

   Then('User Verifies the square class cards in new Realize homepage', () => {
      home.getHomeSize().should('have.attr', 'style', 'max-width: 564px;')
   })
   And("User Hover 'Pen and Paper' icon", () => {
      home.getPaperAndPen().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Assignments' is displayed or not", () => {
      home.getPaperAndPen().eq(0).realHover().should('have.attr', 'title', 'Assignments');
   })
   And("User Hover 'People' icon", () => {
      home.getPeople().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Student & Groups' is displayed or not", () => {
      home.getPeople().eq(0).realHover().should('have.attr', 'title', 'Students & Groups');
   })
   And("User Hover 'Graph' icon", () => {
      home.getGraph().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Data' is displayed or not", () => {
      home.getGraph().eq(0).realHover().should('have.attr', 'title', 'Data');
   })
   And("User Hover 'Book' icon", () => {
      home.getBookIcon().eq(0).realHover()
   })
   Then("User verifies Tooltip message 'Programs' is displayed or not", () => {
      home.getBookIcon().eq(0).realHover().should('have.attr', 'title', 'Programs');
   })


})