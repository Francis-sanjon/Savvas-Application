const {Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/Home.spec';
const home = new Home()

let len;
describe('', () => {

  Then('User Verify if scroll bar is not displayed in My Programs section', () => {
    home.getPgrmImg().then(($data) => {
      len = $data.length;
      if (len > 4) {
        home.getMyProgramList().should('be.visible')
        home.getScroll().should('have.css', 'overflow-y', 'scroll')
      } else if (len < 4) {
        home.getMyProgramList().should('be.visible')
        home.getScroll().should('not.have.css', 'overflow-y', 'scroll')
      }
    })


  })

})






















