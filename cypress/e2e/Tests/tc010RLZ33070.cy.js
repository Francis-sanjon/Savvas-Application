
import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const profilePage = new ProfilePage()
const classesPage=new ClassesPage()

describe('', () => {
    When('User logins Savvas Appllication as Teacher with valid '<username>' and valid',()=>{})
    Then('User verifies the Realize Dashboard Page',()=>{})
    Then('User verifies Class name should be displayed on each of my cards',()=>{})
    Then('User verifies Background each of myCards',()=>{})
    Then('class picture set on each class card',()=>{})
    Then('User verifies rectangular class cards is displayed one in a row or not',()=>{})
    Then('User verifies Class avatar with equivalent icon and label,Assignment,Student',()=>{})
    And('User Click the "Pen and Paper" icon',()=>{})
    Then('User verifies that link navigated to the Class Results by Assignment page for',()=>{})
    And('User navigating to home page',()=>{})
    And('User Click the "People" icon',()=>{})
    Then('User verifies that link navigated to the Student & Group page for that class',()=>{})
    And('User navigating to home page',()=>{})
    And('User Click the "Graph" icon',()=>{})
    Then('User verifies that link navigated to the Class Results by Data page for that',()=>{})
    And('User navigating to home page',()=>{})
    And("User Click the 'Book' icon'",()=>{})
    Then('User verifies Dropdown that contains the programs associated with that class',()=>{})
    
    
})


