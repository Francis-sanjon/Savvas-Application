class ClassesPage{
getActive(){
  return cy.get('[class="active"]')
}
    getAssignmentPage(){
        return  cy.get('.sidebar-navigation').shadow().find('[data-label="Assignments"]')
      }
      getPeopleLabel(){
        return cy.get('.sidebar-navigation').shadow().find('[data-label="Students & Groups"]')
      }
      getGraphLabel(){
        return cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]')
      }
      getTOC(){
       return cy.get('.title-bar_title > [tabindex="-1"]')
      }
}
export default ClassesPage

