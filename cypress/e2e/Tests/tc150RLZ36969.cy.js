const { When } = require("@badeball/cypress-cucumber-preprocessor")

import BaseClass from '../PageObject/BaseClass.spec'

const bs = new BaseClass();

describe('', () => {
    When("User logins Savvas Appllication as Google Student with valid {string} and valid {string}", (username, password) => {
        bs.savvasLogin(username, password)
    })
})