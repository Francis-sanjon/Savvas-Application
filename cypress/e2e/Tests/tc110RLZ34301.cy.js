import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../PageObject/LoginPage.spec";
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'

const bs = new BaseClass();
const home = new Home();
const profilePage = new ProfilePage()

let fnameLength, fullNameLength;
describe('', () => {

    Then('User verifies profile is visible or not', () => {
        home.getProfileIcon().should('be.visible')
    })
    And('User clicks profile icon', () => {
        home.getProfileIcon().click()
    })
    And('User clicks Setting Icon', () => {
        home.getSettingIcon().click()
    })
    Then('User Verify the UserName displayed on the profile shows as firstname', () => {
        profilePage.getStudentName().then(($first) => {
            const Value = $first.text()
            let firstValue = Value.split(" ")[0];
            home.getSettingNew().then(($second) => {
                const secondValue = $second.text()
                fullNameLength = $second.length
                expect(firstValue).to.eq(secondValue)
                cy.log(firstValue)
                cy.log(secondValue)
            })
        })

    })
    Then('User verifies the length of UserName', () => {
        profilePage.getStudentName().then((data) => {
            let len = data.length;
            cy.log(len)
        })
    })
    Then('User verifies if the length of the first name less than X char then ellipsis should not be displayed', () => {
        if (fnameLength < fullNameLength) {
            home.getEllipsis().should('not.be.visible')
        }
    })
    And('User clicks Home Button', () => {
        profilePage.getHomeMenu().click()
    })
    Then('User verifies username displayed without ellipsis', () => {
        //cy.get('.header__navbar_student').shadow().find('[data-utility-id="profile"]').should('not.have.class', 'profile-name profile-name--hover')
        home.getProfileName().should('not.have.class', 'profile-name profile-name--hover')
    })

    And('User clicks Browse Button', () => {
        profilePage.getBrowseMenu().click()
    })
    Then('User verifies username displayed without ellipsis from homepage', () => {
        home.getEllipsis().should('not.have.class', 'profile-name profile-name--hover')
    })
    And('User clicks Classes Menu', () => {
        profilePage.getClaasesMenu().click()
    })

    And('User clicks Grades Menu', () => {
        profilePage.getGradesMenu().click()
    })



})