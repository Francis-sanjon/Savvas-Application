const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
import 'cypress-real-events'
const bs = new BaseClass();
const home = new Home()
const profilePage = new ProfilePage();


describe('', () => {
    When("User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'", () => {

    })
    Then('User verifies the Realize Dashboard Page', () => {

    })
    Then('Then User Verifies the square class cards in new Realize homepage', () => {

    })
    And("User Hover 'Pen and Paper' icon", () => {

    })
    Then("User verifies Tooltip message 'Assignments' is displayed or not", () => {

    })
    And("User Hover 'People' icon", () => {

    })
    Then("User verifies Tooltip message 'Student & Groups' is displayed or not", () => {

    })
    And("User Hover 'Graph' icon", () => {

    })
    Then("User verifies Tooltip message 'Data' is displayed or not", () => {

    })
    And("User Hover 'Book' icon", () => {

    })
    Then("User verifies Tooltip message 'Programs' is displayed or not", () => {

    })


})