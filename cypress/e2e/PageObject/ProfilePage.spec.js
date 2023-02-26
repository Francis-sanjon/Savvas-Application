class ProfilePage {
   getPreparedLanguage() {
      return cy.get('#languageDropdown')
   }
   getSpanish() {
      return cy.get('.dropdown-menu > li:nth-child(2)')
   }
   getEnglish() {
      return cy.get('.dropdown-menu > li:nth-child(1)')
   }
   getSaveBtn() {
      return cy.get('[data-e2e-id="save"]').eq(1)
   }
   getRealizeImg() {
      return cy.get('.header__navbar').shadow().find('#platformNavLogo')
   }
   getAssignments() {
      return cy.get('[class="gridCard__text"]').eq(0)
   }
   getStudentsGroups() {
      return cy.get('[class="gridCard__text"]').eq(1)
   }
   getData() {
      return cy.get('[class="gridCard__text"]').eq(2)
   }
   getPrograms() {
    return cy.get('[class="dropdown-text"]').eq(0)
    
   }
   getStudentName(){
      return cy.get('#studentName')
   }
  
   getHomeMenu() {
      return cy.get('.header__navbar_student').shadow().find('#home')
   }
   getBrowseMenu() {
      return cy.get('.header__navbar_student').shadow().find('[data-id="program"]')
   }
   getClaasesMenu() {
      return cy.get('.header__navbar_student').shadow().find('[data-id="classes"]')
   }
   getGradesMenu() {
      return cy.get('.header__navbar_student').shadow().find('#grades')
      
   }
   getEllipsis(){
      return cy.get('.header__navbar_student').shadow().find('[data-utility-id="profile"]')
   }
   getMessages(){
return cy.get('.message-container')
   }
getProfileName(){
   return cy.get('.header__navbar').shadow().find('.profile-name')
}
}
export default ProfilePage
