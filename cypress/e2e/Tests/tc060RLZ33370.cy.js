

import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
const bs = new BaseClass();
const home = new Home()


describe('', () => {

    Then('User verifies Original Icons "Pen and Paper","People","Graph","Book" fill the whole container or not', () => {
        home.getPaperAndPen().eq(0).should('be.visible')
        home.getPeople().eq(0).should('be.visible')
        home.getGraph().eq(0).should('be.visible')
        home.getBook().eq(0).should('be.visible')


    })
    And('User Click the "Pen and Paper" Icon', () => {
        home.getPaperAndPen().eq(0).click()
    })


    And('User Click the "People" Icon', () => {
        home.getPeople().eq(0).click()
    })

    And('User Click the "Graph" Icon', () => {
        home.getGraph().eq(0).click()
    })


    And('User Click the "Book" Icon Dropdown', () => {
        home.getBook().eq(0).click()
    })



})







