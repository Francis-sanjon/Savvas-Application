import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
const bs = new BaseClass();
const home = new Home()
const classesPage=new ClassesPage()
const profilePage = new ProfilePage()
describe('', () => {
    When ("User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'",()=>{
      
    })
    Then('User verifies the Realize Dashboard Page',()=>{
      
    })
    Then('User verifies Class name should be displayed on each of my cards',()=>{
      
    })
    Then('User verifies Background each of myCards',()=>{
      
    })
    Then('class picture set on each class card',()=>{
      
    })
    Then('User verifies Square class cards is displayed two in a row or not',()=>{
      
    })
    Then('User verifies Original picture "Assignments","Discuss","Programs" fill the whole container or not',()=>{
      
    })
    An('User Click the "Pen and Paper" icon',()=>{
      
    })
    Then('User verifies which navigating to Assignment listing page or not',()=>{
      
    })
    And('User navigating to home page',()=>{
      
    })
    And('User Click the "People" icon',()=>{
      
    })
    Then('User verifies which navigating to Class Discussions page for that class or not',()=>{
      
    })
    And('User navigating to home page',()=>{
      
    })
    And('User Click the "Graph" icon',()=>{
      
    })
    Then('User verifies that link navigated to the Class Results by Assignment page for that class or not',()=>{
      
    })
    And('User navigating to home page',()=>{
      
    })
    And('User Click the "Book" icon Dropdown',()=>{
      
    })
    Then('User verifies that display the programs associated with the class',()=>{
      
    })

  

})