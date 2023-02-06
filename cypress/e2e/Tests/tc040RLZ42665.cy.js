const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import 'cypress-real-events';
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
const bs = new BaseClass();
const profilePage = new ProfilePage()
let len;
describe('', () => {
  When("User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'", () => {

    })
    Then('User verifies the Realize Dashboard Page', () => {

    })
    And('User Hover on Classes subnav', () => {

    })
     Then('User verifies class list popup modesl is displayed or not', () => {

    })
    And('User Click on any classes displayed in class list popup modal', () => {

    })
    Then('User verifies new class details page is not displayed', () => {

    }) 
 
 





})