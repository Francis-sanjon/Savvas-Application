const { Then, And } = require("@badeball/cypress-cucumber-preprocessor")






describe('',()=>{
    Then('User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle icon or not',()=>{
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).should('be.visible')
    
    })
    Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour1', () => {
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]').should('have.css', 'color', 'rgb(0, 0, 0)')
      })
      And('User Clicks Help icon1', () => {
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).realHover()
      })
      


      Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour for student user', () => {
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]').should('have.css', 'color', 'rgb(0, 0, 0)')
      })
      
      And('User Clicks Help icon for student user', () => {
        cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).click()
      })
      
      Then('User Verifies Drop Down background colour for student user', () => {
        //cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]').should('have.css', 'color', 'rgb(33, 37, 41)')
        cy.get('.header__navbar_student').shadow().find('.help-search-container').should('have.css', 'color', 'rgb(33, 37, 41)')
      })
      
      Then('User Verifies Search Text Box apperars on the Top of the Drop Down Values for student user', () => {
        cy.get('.header__navbar_student').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]').should('be.visible')
      })
      
      And('User Enters some value in Textbox for student user', () => {
        cy.get('.header__navbar_student').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]').click().type('classes', { force: true })
      })
      
      And('User hits enter for student user', () => {
        cy.get('.header__navbar_student').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]').click().type('{enter}')
      })
      
      Then('User verifies the Result of Textbox for student user', () => {
       //cy.get('.header__navbar_student').shadow().find('.help-search-container').should('be.visible')
        cy.get('.floatingModal').should('be.visible')
      })
      

})