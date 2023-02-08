const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/01_Home.spec'
import ProfilePage from '../PageObject/ProfilePage.spec'
import BaseClass from "../PageObject/BaseClass.spec";

const home = new Home();
const bs = new BaseClass();
const profilePage = new ProfilePage()

describe('', () => {
    When("User logins Savvas Appllication As Teacher with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    And('User clicks profile Icon', () => {
        home.getProfileIconNew().click()
    })
    And('User clicks Setting option', () => {
        let condition = '';
        home.getSetting().then((data) => {
            let condition = data.text()
            cy.log(condition)
            if (condition !== 'Settings') {
                home.getSetting().should('have.text', 'Configuración').click()

                profilePage.getPreparedLanguage().click()
                profilePage.getEnglish().click()
                // cy.get('.ng-binding').eq(21).click()
                profilePage.getSaveBtn().click()
                // cy.wait(10000)
                profilePage.getRealizeImg().click()
                home.getProfileIcon()
                //  cy.get('.header__navbar').shadow().find('.profile-container-wrapper')
                // home.getprofileIcon().click()
            }

        })

        home.getSetting().should('have.text', 'Settings').click()
        // cy.wait(15000);
    })
    Then('User verifies Setting page', () => {
        cy.url().should('include', 'profile')
    })
    And('User Clicks on prepared language', () => {
        profilePage.getPreparedLanguage().click()
    })
    When('User Selects spanish language', () => {
        profilePage.getSpanish().click()
    })
    And('User clicks Save Button', () => {
        profilePage.getSaveBtn().click()
        cy.get('.message-container').then((data) => {
            let msg = data.text();
            cy.log(msg)
        })
        // cy.get('[data-e2e-id="ok"]').click()       

        // cy.wait(15000)
    })
    And('User clicks savvas Realize Icon to go Dashboard page', () => {
        profilePage.getRealizeImg().click()


    })
    Then('User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas', () => {
        profilePage.getStudentsGroups().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Estudiantes y grupos ')
        })
        profilePage.getData().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Datos ')
        })
        profilePage.getAssignments().then((data) => {
            let value = data.text()
            expect(value).to.eq(' Asignaciones ')
        })
        profilePage.getPrograms().then((data) => {
            let value = data.text()
            cy.log(value)
        })
    })
    And('User Clicks profile Icon', () => {
        home.getProfileIconNew().click()
    })
    And('User clicks Setting', () => {
        home.getSetting().click()
    })
    When('User Selects English language', () => {
        profilePage.getEnglish().click()
    })
    And('User SignOut the Savvas Appllication', () => {
        home.getSignOutBtn().click()
 cy.wait(5000)
    })
    When("User logins Savvas Appllication As Student with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

})
