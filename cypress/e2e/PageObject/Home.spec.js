class Home {
  getNavBar() {
    return cy.get('.header__navbar').as('NavBar')
  }
  getHelpIcon() {
    return cy.get('.header__navbar').shadow().find('[data-utility-id="help"]').eq(0)
  }
  getHelpIconStd() {
    return cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]')
  }
  getHelpIconColor() {
    return cy.get('.header__navbar').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]')
  }
  getHelpIconColorStd() {
    return cy.get('.header__navbar_student').shadow().find('[data-utility-id="help"]').eq(0).shadow().find('[class="icon-button center"]')
  }
  getPopUp() {
    return cy.get('.header__navbar').shadow().find('.help-search-container')
  }
  getPopUpStd() {
    return cy.get('.header__navbar_student').shadow().find('.help-search-container')
  }
  getInputBox() {
    return cy.get('.header__navbar').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]')
  }
  getInputBoxStd() {
    return cy.get('.header__navbar_student').shadow().find('[data-field-placeholder="Search Help"]').shadow().find('[placeholder="Search Help"]')
  }
  getHelpForThisPage() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(0)
  }
  getPopUpCloseBtn() {
    return cy.get('[class="floatingModal hydrated"]').shadow().find('[class="close-button hydrated"]')
  }
  getProgramTraining() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(1)
  }
  getTechnicalSupport() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(2)
  }
  getProgramSpecialist() {
    return cy.get('.header__navbar').shadow().find('[class="help-item-a"]').eq(3)
  }
  getProfileIconNew() {
    return cy.get('.header__navbar').shadow().find('.profile-container-wrapper')
  }
  getProfileIcon() {
    return cy.get('.header__navbar_student').shadow().find('[class="profile-container"]')
  }
  getSettingNew() {
    return cy.get('.header__navbar_student').shadow().find('[class="platform__navbar--profileUtility hydrated"]').shadow().find('[class="utility__item--userName"]')
  }
  getProfileName() {
    return cy.get('.header__navbar_student').shadow().find('[data-utility-id="profile"]')
  }
  getSignOutBtn() {
    return cy.get('.header__navbar').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="signOut"]')
  }
  getSetting() {
    return cy.get('.header__navbar').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="settings"]')
  }
  getSettingIcon() {
    return cy.get('.header__navbar_student').shadow().find('[class="avatar-dropdown hydrated"]').shadow().find('[data-id="settings"]')
  }
  getEllipsis() {
    return cy.get('.header__navbar_student').shadow().find('[aria-describeby="tooltip-id"]')
  }
  getClassCardTitle() {
    return cy.get('.classInfiniteScroll').find('[class="class__title"]')
  }
  getColorBar() {
    return cy.get('[class="classAssignmentLink"]')
  }
  getClassCardImage() {
    return cy.get('[class="classImage"]').eq(1)
  }
  getClassCardImage1() {
    return cy.get('[class="classImage"]')
  }
  getClassCardHeader() {
    return cy.get('.classInfiniteScroll').find('[class="class__title"]').eq(1)
  }
  getClassContainer() {
    return cy.get('.classInfiniteScroll')
  }
  getEllipsis() {
    return cy.get('.header__navbar_student').shadow().find('.platform__navbar--profileUtility').shadow().find('[class="utility__item--userName"]')
  }
  getPopUpPrgm() {
    return cy.get('[class="programs-list"]')
  }
  getMycardBgColor() {
    return cy.get('[class="row classHeader"]')
  }
  getSquareCard() {
    return cy.get('.classHeader > .classAssignmentLink > div')
  }
  getRectangularCard() {
    return cy.get('[class="h-100 pr-0 className col-9"]')
  }
  getPgrmImg() {
    return cy.get('[class="program-row_list_image"]')
  }
  getMyProgramList() {
    return cy.get('[class="programs-list"]')
  }
  getPaperAndPen() {
    return cy.get('[data-e2e-id="class-listing-assignments-link"]')
  }
  getPeople() {
    return cy.get('[data-e2e-id="class-listing-studentsAndGroups-link"]')
  }
  getGraph() {
    return cy.get('[data-e2e-id="class-listing-data-link"]')
  }
  getBook() {
    return cy.get('[class="program-dropdown"]')
  }
  getBookIcon() {
    return cy.get('[title="Programs"]')
  }
  getScroll() {
    return cy.get('.d-none')
  }
  getClassesSubNav() {
    return cy.get('.header__navbar').shadow().find('[data-id="classes"]')
  }
  getClassesPopUp() {
    return cy.get('[class="clearfix onHoverClass"]')
  }
  getClassesCard() {
    return cy.get('[class="clearfix onHoverClass"]')
  }
  getHomeSize() {
    return cy.get('[class="h-100 pr-0 className col-10"]')
  }
  getLoginAvatar() {
    return cy.get('.header__navbar').shadow().find('.avatar')
  }
  getClassResolution() {
    return cy.get('.classAssignmentLink > div.h-100')
  }
  getFloating() {
    return cy.get('.floatingModal')
  }


}
export default Home