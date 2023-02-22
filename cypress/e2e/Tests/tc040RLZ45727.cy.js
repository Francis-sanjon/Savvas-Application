const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const classesPage = new ClassesPage()

describe('', () => {
    When("User logins Savvas Appllication as Admin User with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
    })
    And('User clicks on any Program in My Program section', () => {
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        cy.log(randomNumber);
        let locat = "#" + randomNumber + '-toc-list';
        cy.get(locat).click()
    })
    Then('User verifies new TOC page is displayed or not', () => {
        classesPage.getTOC().then((data) => {
            let TOC = data.text()
            expect(TOC).to.eq(' Table of Contents ')
        })
    })

})