const { When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Home from '../PageObject/01_Home.spec'
import BaseClass from '../PageObject/BaseClass.spec'
const home = new Home()
const bs = new BaseClass();


describe('', () => {
    When("User logins Savvas Appllication as Google Student with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
    })
})