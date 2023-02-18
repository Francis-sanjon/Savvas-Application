import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const home = new Home()
const classesPage = new ClassesPage()
const profilePage = new ProfilePage()

describe('', () => {
    Then('User logins Savvas Appllication as Student with valid {string} and valid {string}', (username, password) => {
        bs.savvasLogin(username, password)
    })

    Then('User verifies Class name should be displayed on each of my cards', () => {
        home.getClassCardTitle().should('be.visible')
    })
    Then('User verifies Background each of myCards', () => {
     
        home.getMycardBgColor().should('not.have.css', 'color', 'rgb(0, 0, 0)')
    })
    Then('class picture set on each class card', () => {
      
        home.getClassCardImage().should('be.visible')
    })
    Then('User verifies Square class cards is displayed two in a row or not', () => {
      
       home.getSquareCard().eq(0).should('have.attr', 'style', 'max-width: 564px;')
           })
    Then('User verifies Original picture "Pen and Paper","People","Graph","Book" fill the whole container or not', () => {
        profilePage.getAssignments().should('be.visible')
        profilePage.getStudentsGroups().should('be.visible')
        profilePage.getData().should('be.visible')
        profilePage.getPrograms().should('be.visible')


    })
    And('User Click the "Pen and Paper" icon', () => {
        profilePage.getAssignments().click()
        cy.wait(10000)
    })
    Then('User verifies which navigating to Assignment listing page or not', () => {
        classesPage.getAssignmentPage().should('be.visible')
    })

    And('User Click the "People" icon', () => {
        profilePage.getStudentsGroups().click()
    })
    Then('User verifies which navigating to Class Discussions page for that class or not', () => {
        classesPage.getPeopleLabel().should('be.visible')
    })

    And('User Click the "Graph" icon', () => {
        profilePage.getData().click()
    })
    Then('User verifies that link navigated to the Class Results by Assignment page for that class or not', () => {
        classesPage.getGraphLabel().should('be.visible')
    })

    And('User Click the "Book" icon Dropdown', () => {
        profilePage.getPrograms().click()
    })
    Then('User verifies that display the programs associated with the class', () => {

        home.getPopUpPrgm().should('be.visible')
    })
   




})