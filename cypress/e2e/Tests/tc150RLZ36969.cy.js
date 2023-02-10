const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/01_Home.spec'
import BaseClass from '../PageObject/BaseClass.spec'
const home = new Home()
const bs = new BaseClass();


describe('', () => {
    When("User logins Savvas Appllication as Google Student with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
    })

   
    // Then("User verify it displays with underline on the class card title", () => {

    // })
    // And('User Hover on the colorbar area', () => {

    // })
    // Then('verify cursor turns into hand symbol', () => {

    // })
    // Then("User Verify class card image clickable or not", () => {

    // })
    // And('User clicks class card header', () => {

    // })
    // Then('User verifies which nagating to assignment listing page', () => {

    // })

})